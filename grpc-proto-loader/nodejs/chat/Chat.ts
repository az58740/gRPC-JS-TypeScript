// Original file: proto/chat.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ClientMessage as _chat_ClientMessage, ClientMessage__Output as _chat_ClientMessage__Output } from '../chat/ClientMessage';
import type { ServerMessage as _chat_ServerMessage, ServerMessage__Output as _chat_ServerMessage__Output } from '../chat/ServerMessage';

export interface ChatClient extends grpc.Client {
  join(argument: _chat_ClientMessage, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_ServerMessage__Output>;
  join(argument: _chat_ClientMessage, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_ServerMessage__Output>;
  
  send(argument: _chat_ClientMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_ServerMessage__Output>): grpc.ClientUnaryCall;
  send(argument: _chat_ClientMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_ServerMessage__Output>): grpc.ClientUnaryCall;
  send(argument: _chat_ClientMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_ServerMessage__Output>): grpc.ClientUnaryCall;
  send(argument: _chat_ClientMessage, callback: grpc.requestCallback<_chat_ServerMessage__Output>): grpc.ClientUnaryCall;
  
}

export interface ChatHandlers extends grpc.UntypedServiceImplementation {
  join: grpc.handleServerStreamingCall<_chat_ClientMessage__Output, _chat_ServerMessage>;
  
  send: grpc.handleUnaryCall<_chat_ClientMessage__Output, _chat_ServerMessage>;
  
}

export interface ChatDefinition extends grpc.ServiceDefinition {
  join: MethodDefinition<_chat_ClientMessage, _chat_ServerMessage, _chat_ClientMessage__Output, _chat_ServerMessage__Output>
  send: MethodDefinition<_chat_ClientMessage, _chat_ServerMessage, _chat_ClientMessage__Output, _chat_ServerMessage__Output>
}
