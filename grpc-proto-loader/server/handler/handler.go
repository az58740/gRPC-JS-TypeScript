package handler

import (
	"fmt"
	"io"

	chatPb "github.com/az58740/gRPC-JS-TypeScript/grpc-proto-loader/golang/chat"
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
