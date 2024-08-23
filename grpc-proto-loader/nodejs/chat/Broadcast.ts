// Original file: proto/chat.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Close as _chat_Close, Close__Output as _chat_Close__Output } from '../chat/Close';
import type { Connect as _chat_Connect, Connect__Output as _chat_Connect__Output } from '../chat/Connect';
import type { Message as _chat_Message, Message__Output as _chat_Message__Output } from '../chat/Message';

export interface BroadcastClient extends grpc.Client {
  BroadcastMessage(argument: _chat_Message, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Close__Output>): grpc.ClientUnaryCall;
  BroadcastMessage(argument: _chat_Message, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_Close__Output>): grpc.ClientUnaryCall;
  BroadcastMessage(argument: _chat_Message, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Close__Output>): grpc.ClientUnaryCall;
  BroadcastMessage(argument: _chat_Message, callback: grpc.requestCallback<_chat_Close__Output>): grpc.ClientUnaryCall;
  broadcastMessage(argument: _chat_Message, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Close__Output>): grpc.ClientUnaryCall;
  broadcastMessage(argument: _chat_Message, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_Close__Output>): grpc.ClientUnaryCall;
  broadcastMessage(argument: _chat_Message, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Close__Output>): grpc.ClientUnaryCall;
  broadcastMessage(argument: _chat_Message, callback: grpc.requestCallback<_chat_Close__Output>): grpc.ClientUnaryCall;
  
  CreateStream(argument: _chat_Connect, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_Message__Output>;
  CreateStream(argument: _chat_Connect, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_Message__Output>;
  createStream(argument: _chat_Connect, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_Message__Output>;
  createStream(argument: _chat_Connect, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_Message__Output>;
  
}

export interface BroadcastHandlers extends grpc.UntypedServiceImplementation {
  BroadcastMessage: grpc.handleUnaryCall<_chat_Message__Output, _chat_Close>;
  
  CreateStream: grpc.handleServerStreamingCall<_chat_Connect__Output, _chat_Message>;
  
}

export interface BroadcastDefinition extends grpc.ServiceDefinition {
  BroadcastMessage: MethodDefinition<_chat_Message, _chat_Close, _chat_Message__Output, _chat_Close__Output>
  CreateStream: MethodDefinition<_chat_Connect, _chat_Message, _chat_Connect__Output, _chat_Message__Output>
}
