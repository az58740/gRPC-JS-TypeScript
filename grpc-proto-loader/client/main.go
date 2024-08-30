package main

import (
	"bufio"
	"context"
	"flag"
	"fmt"
	"io"
	"log"
	"os"

	chatPb "github.com/az58740/gRPC-JS-TypeScript/grpc-proto-loader/golang/chat"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var channelName = flag.String("channel", "default", "Channel name for chatting")
var senderName = flag.String("sender", "default", "Senders name")
var tcpServer = flag.String("server", ":5400", "Tcp server")

func joinChannel(ctx context.Context, client chatPb.ChatServiceClient) {
	channel := chatPb.Channel{Name: *channelName, SendersName: *senderName}
	stream, err := client.JoinChannel(ctx, &channel)
	if err != nil {
		log.Fatalf("client.JoinChannel(ctx, &channel) throws: %v", err)
	}
	fmt.Printf("Joined channel: %v \n", *channelName)

	waitc := make(chan struct{})

	go func() {
		for {
			in, err := stream.Recv()

			if err == io.EOF {
				close(waitc)
				return
			}
			if err != nil {
				log.Fatalf("Failed to receive message from channel joining. \nErr: %v", err)
			}
			if *senderName != in.Sender {
				fmt.Printf("MESSAGE: (%v) -> %v \n", in.Sender, in.Message)
			}
		}

	}()
	<-waitc
}
func sendMessage(ctx context.Context, client chatPb.ChatServiceClient, message string) {
	stream, err := client.SendMessage(ctx)
	if err != nil {
		log.Printf("Cannot send message: error: %v", err)
	}
	msg := chatPb.Message{
		Channel: &chatPb.Channel{
			Name:        *channelName,
			SendersName: *senderName},
		Message: message,
		Sender:  *senderName,
	}
	stream.Send(&msg)

	ack, err := stream.CloseAndRecv()
	if err != nil {
		fmt.Printf("Message sent failed : %v \n", err)
	}
	fmt.Printf("Message sent: %v \n", ack)
}

func main() {
	flag.Parse()

	fmt.Println("--- CLIENT APP ---")
	opts := grpc.WithTransportCredentials(insecure.NewCredentials())
	conn, err := grpc.NewClient(*tcpServer, opts)
	if err != nil {
		log.Fatalf("Fail to dail: %v", err)
	}

	defer conn.Close()
	ctx := context.Background()
	client := chatPb.NewChatServiceClient(conn)
	go joinChannel(ctx, client)
	scanner := bufio.NewScanner(os.Stdin)
	for scanner.Scan() {
		go sendMessage(ctx, client, scanner.Text())
	}

}
