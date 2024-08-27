package main

import (
	"context"
	"fmt"
	"log"

	proto "github.com/az58740/gRPC-JS-TypeScript/grpc-proto-loader/golang/chat"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

type App struct {
	clientconn *grpc.ClientConn
}

func NewApp() *App {
	return &App{}
}

func main() {
	var err error
	serverAdd := "localhost:8080"
	a := NewApp()
	opts := grpc.WithTransportCredentials(insecure.NewCredentials())
	a.clientconn, err = grpc.NewClient(serverAdd, opts)
	if err != nil {
		log.Fatalf("could not connect: %v", err)
	}
	chatServiceClient := proto.NewBroadcastClient(a.clientconn)
	createstream(chatServiceClient)
	broadcast(chatServiceClient)
}
func createstream(client proto.BroadcastClient) {
	fmt.Print("Client Connect to server")
	conn := &proto.Connect{
		User: &proto.User{
			Id:   "1",
			Name: "Ali",
		},
		Active: true,
	}
	stream, err := client.CreateStream(context.Background(), conn)
	if err != nil {
		log.Fatalf("client connection failed with error: %v", err)

	}
	stream.SendMsg("Hello")

}
func broadcast(client proto.BroadcastClient) {
	msg := &proto.Message{
		Id:      "1",
		Content: "Hello",
	}
	client.BroadcastMessage(context.Background(), msg)
}
