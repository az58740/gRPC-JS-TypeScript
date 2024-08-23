// Original file: proto/example.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ClientMessage as _chat_package_ClientMessage, ClientMessage__Output as _chat_package_ClientMessage__Output } from '../chat_package/ClientMessage';
import type { ServerMessage as _chat_package_ServerMessage, ServerMessage__Output as _chat_package_ServerMessage__Output } from '../chat_package/ServerMessage';

export interface ExampleClient extends grpc.Client {
  bidirectionalStreamingCall(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_chat_package_ClientMessage, _chat_package_ServerMessage__Output>;
  bidirectionalStreamingCall(options?: grpc.CallOptions): grpc.ClientDuplexStream<_chat_package_ClientMessage, _chat_package_ServerMessage__Output>;
  
  clientStreamingCall(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_package_ServerMessage__Output>): grpc.ClientWritableStream<_chat_package_ClientMessage>;
  clientStreamingCall(metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_package_ServerMessage__Output>): grpc.ClientWritableStream<_chat_package_ClientMessage>;
  clientStreamingCall(options: grpc.CallOptions, callback: grpc.requestCallback<_chat_package_ServerMessage__Output>): grpc.ClientWritableStream<_chat_package_ClientMessage>;
  clientStreamingCall(callback: grpc.requestCallback<_chat_package_ServerMessage__Output>): grpc.ClientWritableStream<_chat_package_ClientMessage>;
  
  serverStreamingCall(argument: _chat_package_ClientMessage, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_package_ServerMessage__Output>;
  serverStreamingCall(argument: _chat_package_ClientMessage, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_package_ServerMessage__Output>;
  
  unaryCall(argument: _chat_package_ClientMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_package_ServerMessage__Output>): grpc.ClientUnaryCall;
  unaryCall(argument: _chat_package_ClientMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_package_ServerMessage__Output>): grpc.ClientUnaryCall;
  unaryCall(argument: _chat_package_ClientMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_package_ServerMessage__Output>): grpc.ClientUnaryCall;
  unaryCall(argument: _chat_package_ClientMessage, callback: grpc.requestCallback<_chat_package_ServerMessage__Output>): grpc.ClientUnaryCall;
  
}

export interface ExampleHandlers extends grpc.UntypedServiceImplementation {
  bidirectionalStreamingCall: grpc.handleBidiStreamingCall<_chat_package_ClientMessage__Output, _chat_package_ServerMessage>;
  
  clientStreamingCall: grpc.handleClientStreamingCall<_chat_package_ClientMessage__Output, _chat_package_ServerMessage>;
  
  serverStreamingCall: grpc.handleServerStreamingCall<_chat_package_ClientMessage__Output, _chat_package_ServerMessage>;
  
  unaryCall: grpc.handleUnaryCall<_chat_package_ClientMessage__Output, _chat_package_ServerMessage>;
  
}

export interface ExampleDefinition extends grpc.ServiceDefinition {
  bidirectionalStreamingCall: MethodDefinition<_chat_package_ClientMessage, _chat_package_ServerMessage, _chat_package_ClientMessage__Output, _chat_package_ServerMessage__Output>
  clientStreamingCall: MethodDefinition<_chat_package_ClientMessage, _chat_package_ServerMessage, _chat_package_ClientMessage__Output, _chat_package_ServerMessage__Output>
  serverStreamingCall: MethodDefinition<_chat_package_ClientMessage, _chat_package_ServerMessage, _chat_package_ClientMessage__Output, _chat_package_ServerMessage__Output>
  unaryCall: MethodDefinition<_chat_package_ClientMessage, _chat_package_ServerMessage, _chat_package_ClientMessage__Output, _chat_package_ServerMessage__Output>
}
