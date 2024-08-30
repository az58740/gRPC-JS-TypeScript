// package: chat
// file: chat.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as chat_pb from "./chat_pb";

interface IChatServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    chat: IChatServiceService_IChat;
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
    chat: grpc.handleBidiStreamingCall<chat_pb.ChatRequest, chat_pb.ChatResponse>;
}

export interface IChatServiceClient {
    chat(): grpc.ClientDuplexStream<chat_pb.ChatRequest, chat_pb.ChatResponse>;
    chat(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.ChatRequest, chat_pb.ChatResponse>;
    chat(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.ChatRequest, chat_pb.ChatResponse>;
}

export class ChatServiceClient extends grpc.Client implements IChatServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public chat(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.ChatRequest, chat_pb.ChatResponse>;
    public chat(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.ChatRequest, chat_pb.ChatResponse>;
}
