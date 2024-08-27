package main

import (
	"fmt"
	"log"
	"net"

	proto "github.com/az58740/gRPC-JS-TypeScript/grpc-proto-loader/golang/chat"
	"github.com/az58740/gRPC-JS-TypeScript/grpc-proto-loader/server/handler"
	"google.golang.org/grpc"
)

func main() {
	//Create a new gRPC server
	gRPCServer := grpc.NewServer()
	//Create a new connection pool
	var conn []*handler.Connection
	pool := &handler.Pool{
		Connection: conn,
	}
	//Register the pool with the gRPC Server
	proto.RegisterBroadcastServer(gRPCServer, pool)

	//Create a TCP Listener at port 8080
	serverPort := 8080
	listener, err := net.Listen("tcp", fmt.Sprintf("localhost:%d", serverPort))
	if err != nil {
		log.Fatalf("Error creating the server %v", err)
	}
	fmt.Printf("Server started %v", fmt.Sprintf("localhost:%d", serverPort))

	//Start serving request at serverport
	if err := gRPCServer.Serve(listener); err != nil {
		log.Fatalf("Error creating the server %v", err)
	}
}
