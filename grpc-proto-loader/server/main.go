package main

import (
	"fmt"
	"io"
	"log"
	"net"

	chatPb "github.com/az58740/gRPC-JS-TypeScript/grpc-proto-loader/golang/chat"
	"google.golang.org/grpc"
)

type chatServiceServer struct {
	chatPb.UnimplementedChatServiceServer
	channel map[string][]chan *chatPb.Message
}

func (c *chatServiceServer) JoinChannel(ch *chatPb.Channel, msgStream chatPb.ChatService_JoinChannelServer) error {
	msgChannel := make(chan *chatPb.Message)
	c.channel[ch.Name] = append(c.channel[ch.Name], msgChannel)
	//doing this never closes the stream
	for {
		select {
		//which notify’s that the channel is closed
		case <-msgStream.Context().Done():
			return nil
		case msg := <-msgChannel:
			fmt.Printf("GO ROUTINE (got message): %v \n", msg)
			msgStream.Send(msg)
		}
	}
}
func (c *chatServiceServer) SendMessage(msgStream chatPb.ChatService_SendMessageServer) error {
	msg, err := msgStream.Recv()
	if err == io.EOF {
		return nil
	}
	if err != nil {
		return err
	}
	ack := chatPb.MessageAck{Status: "SENT"}
	msgStream.SendAndClose(&ack)

	go func() {
		streams := c.channel[msg.Channel.Name]
		for _, msgchan := range streams {
			msgchan <- <-msgchan
		}
	}()
	return nil
}

func main() {
	port := 5400
	lis, err := net.Listen("tcp", fmt.Sprintf("localhost:%d", port))
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}
	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)
	chatPb.RegisterChatServiceServer(grpcServer, &chatServiceServer{
		channel: make(map[string][]chan *chatPb.Message),
	})
	fmt.Printf("gRPC Server start on port: %d", port)
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("Server failed to start: %v", err)

	}
}
