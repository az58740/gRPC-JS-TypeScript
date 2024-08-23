// Original file: proto/chat.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ClientMessage as _chat_package_ClientMessage, ClientMessage__Output as _chat_package_ClientMessage__Output } from '../chat_package/ClientMessage';
import type { ServerMessage as _chat_package_ServerMessage, ServerMessage__Output as _chat_package_ServerMessage__Output } from '../chat_package/ServerMessage';

export interface ChatClient extends grpc.Client {
  join(argument: _chat_package_ClientMessage, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_package_ServerMessage__Output>;
  join(argument: _chat_package_ClientMessage, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_package_ServerMessage__Output>;
  
  send(argument: _chat_package_ClientMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_package_ServerMessage__Output>): grpc.ClientUnaryCall;
  send(argument: _chat_package_ClientMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_package_ServerMessage__Output>): grpc.ClientUnaryCall;
  send(argument: _chat_package_ClientMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_package_ServerMessage__Output>): grpc.ClientUnaryCall;
  send(argument: _chat_package_ClientMessage, callback: grpc.requestCallback<_chat_package_ServerMessage__Output>): grpc.ClientUnaryCall;
  
}

export interface ChatHandlers extends grpc.UntypedServiceImplementation {
  join: grpc.handleServerStreamingCall<_chat_package_ClientMessage__Output, _chat_package_ServerMessage>;
  
  send: grpc.handleUnaryCall<_chat_package_ClientMessage__Output, _chat_package_ServerMessage>;
  
}

export interface ChatDefinition extends grpc.ServiceDefinition {
  join: MethodDefinition<_chat_package_ClientMessage, _chat_package_ServerMessage, _chat_package_ClientMessage__Output, _chat_package_ServerMessage__Output>
  send: MethodDefinition<_chat_package_ClientMessage, _chat_package_ServerMessage, _chat_package_ClientMessage__Output, _chat_package_ServerMessage__Output>
}
