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

func (c *chatServiceServer) Chat(msgStream chatPb.ChatService_ChatServer) error {
	msgChannel := make(chan *chatPb.ChatResponse)
	go func() {
		//doing this never closes the stream
		for {
			select {
			//which notify’s that the channel is closed
			case <-msgStream.Context().Done():
				return
			case msg := <-msgChannel:
				fmt.Printf("Server: %v \n", msg)
				msgStream.Send(msg)
			}
		}
	}()
	for {
		msg, err := msgStream.Recv()
		if err == io.EOF {
			return nil
		}
		if err != nil {
			log.Fatalf("error while reading client stream: %v", err)
			return err
		}

		msgChannel <- &chatPb.ChatResponse{
			Message:  msg.GetMessage(),
			Username: "default",
		}
	}
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
