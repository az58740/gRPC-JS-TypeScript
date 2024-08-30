// package: chat
// file: chat.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as chat_pb from "./chat_pb";

interface IChatServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    joinChannel: IChatServiceService_IJoinChannel;
    sendMessage: IChatServiceService_ISendMessage;
    chat: IChatServiceService_IChat;
}

interface IChatServiceService_IJoinChannel extends grpc.MethodDefinition<chat_pb.Channel, chat_pb.Message> {
    path: "/chat.ChatService/JoinChannel";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<chat_pb.Channel>;
    requestDeserialize: grpc.deserialize<chat_pb.Channel>;
    responseSerialize: grpc.serialize<chat_pb.Message>;
    responseDeserialize: grpc.deserialize<chat_pb.Message>;
}
interface IChatServiceService_ISendMessage extends grpc.MethodDefinition<chat_pb.Message, chat_pb.MessageAck> {
    path: "/chat.ChatService/SendMessage";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_pb.Message>;
    requestDeserialize: grpc.deserialize<chat_pb.Message>;
    responseSerialize: grpc.serialize<chat_pb.MessageAck>;
    responseDeserialize: grpc.deserialize<chat_pb.MessageAck>;
}
interface IChatServiceService_IChat extends grpc.MethodDefinition<chat_pb.ChatRequest, chat_pb.ChatResponse> {
    path: "/chat.ChatService/Chat";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<chat_pb.ChatRequest>;
    requestDeserialize: grpc.deserialize<chat_pb.ChatRequest>;
    responseSerialize: grpc.serialize<chat_pb.ChatResponse>;
    responseDeserialize: grpc.deserialize<chat_pb.ChatResponse>;
}

export const ChatServiceService: IChatServiceService;

export interface IChatServiceServer {
    joinChannel: grpc.handleServerStreamingCall<chat_pb.Channel, chat_pb.Message>;
    sendMessage: grpc.handleClientStreamingCall<chat_pb.Message, chat_pb.MessageAck>;
    chat: grpc.handleBidiStreamingCall<chat_pb.ChatRequest, chat_pb.ChatResponse>;
}

export interface IChatServiceClient {
    joinChannel(request: chat_pb.Channel, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_pb.Message>;
    joinChannel(request: chat_pb.Channel, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_pb.Message>;
    sendMessage(callback: (error: grpc.ServiceError | null, response: chat_pb.MessageAck) => void): grpc.ClientWritableStream<chat_pb.Message>;
    sendMessage(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.MessageAck) => void): grpc.ClientWritableStream<chat_pb.Message>;
    sendMessage(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.MessageAck) => void): grpc.ClientWritableStream<chat_pb.Message>;
    sendMessage(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.MessageAck) => void): grpc.ClientWritableStream<chat_pb.Message>;
    chat(): grpc.ClientDuplexStream<chat_pb.ChatRequest, chat_pb.ChatResponse>;
    chat(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.ChatRequest, chat_pb.ChatResponse>;
    chat(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.ChatRequest, chat_pb.ChatResponse>;
}

export class ChatServiceClient extends grpc.Client implements IChatServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public joinChannel(request: chat_pb.Channel, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_pb.Message>;
    public joinChannel(request: chat_pb.Channel, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_pb.Message>;
    public sendMessage(callback: (error: grpc.ServiceError | null, response: chat_pb.MessageAck) => void): grpc.ClientWritableStream<chat_pb.Message>;
    public sendMessage(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.MessageAck) => void): grpc.ClientWritableStream<chat_pb.Message>;
    public sendMessage(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.MessageAck) => void): grpc.ClientWritableStream<chat_pb.Message>;
    public sendMessage(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.MessageAck) => void): grpc.ClientWritableStream<chat_pb.Message>;
    public chat(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.ChatRequest, chat_pb.ChatResponse>;
    public chat(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.ChatRequest, chat_pb.ChatResponse>;
}
