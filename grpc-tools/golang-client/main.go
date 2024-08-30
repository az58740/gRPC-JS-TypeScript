package main

import (
	"bufio"
	"context"
	"flag"
	"fmt"
	"log"
	"os"

	chatPb "github.com/az58740/gRPC-JS-TypeScript/grpc-proto-loader/golang/chat"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var channelName = flag.String("channel", "default", "Channel name for chatting")
var senderName = flag.String("sender", "default", "Senders name")
var tcpServer = flag.String("server", ":5400", "Tcp server")

func chat(ctx context.Context, client chatPb.ChatServiceClient, message string) {
	stream, err := client.Chat(ctx)
	if err != nil {
		log.Printf("Cannot send message: error: %v", err)
	}
	msg := chatPb.ChatRequest{
		Message: message,
	}
	fmt.Print(&msg)
	stream.Send(&msg)

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
	scanner := bufio.NewScanner(os.Stdin)
	for scanner.Scan() {
		go chat(ctx, client, scanner.Text())
	}

}
