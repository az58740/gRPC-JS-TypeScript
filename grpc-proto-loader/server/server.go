package main

import (
	"fmt"
	"log"
	"net"

	pb "github.com/az58740/gRPC-JS-TypeScript/grpc-proto-loader/golang/chat"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

type App struct {
	pb.UnimplementedChatServer
}

func NewApp() *App {
	return &App{}
}

func (a App) start() {
	serverPort := 50051
	serverAdd := fmt.Sprintf("localhost:%d", serverPort)
	fmt.Println("starting chat gRPC server at ", serverAdd)

	lis, err := net.Listen("tcp", serverAdd)
	if err != nil {
		log.Fatalf("failed to listen:%v", err)
	}
	opts := []grpc.ServerOption{}
	s := grpc.NewServer(opts...)

	pb.RegisterChatServer(s, a)
	reflection.Register(s)

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to strart server : %v", err)
	}

}

func main() {
	a := NewApp()
	a.start()

}
