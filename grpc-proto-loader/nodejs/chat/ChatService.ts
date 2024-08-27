// Original file: proto/chat.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Channel as _chat_Channel, Channel__Output as _chat_Channel__Output } from '../chat/Channel';
import type { Message as _chat_Message, Message__Output as _chat_Message__Output } from '../chat/Message';
import type { MessageAck as _chat_MessageAck, MessageAck__Output as _chat_MessageAck__Output } from '../chat/MessageAck';

export interface ChatServiceClient extends grpc.Client {
  JoinChannel(argument: _chat_Channel, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_Message__Output>;
  JoinChannel(argument: _chat_Channel, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_Message__Output>;
  joinChannel(argument: _chat_Channel, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_Message__Output>;
  joinChannel(argument: _chat_Channel, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_Message__Output>;
  
  SendMessage(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_MessageAck__Output>): grpc.ClientWritableStream<_chat_Message>;
  SendMessage(metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_MessageAck__Output>): grpc.ClientWritableStream<_chat_Message>;
  SendMessage(options: grpc.CallOptions, callback: grpc.requestCallback<_chat_MessageAck__Output>): grpc.ClientWritableStream<_chat_Message>;
  SendMessage(callback: grpc.requestCallback<_chat_MessageAck__Output>): grpc.ClientWritableStream<_chat_Message>;
  sendMessage(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_MessageAck__Output>): grpc.ClientWritableStream<_chat_Message>;
  sendMessage(metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_MessageAck__Output>): grpc.ClientWritableStream<_chat_Message>;
  sendMessage(options: grpc.CallOptions, callback: grpc.requestCallback<_chat_MessageAck__Output>): grpc.ClientWritableStream<_chat_Message>;
  sendMessage(callback: grpc.requestCallback<_chat_MessageAck__Output>): grpc.ClientWritableStream<_chat_Message>;
  
}

export interface ChatServiceHandlers extends grpc.UntypedServiceImplementation {
  JoinChannel: grpc.handleServerStreamingCall<_chat_Channel__Output, _chat_Message>;
  
  SendMessage: grpc.handleClientStreamingCall<_chat_Message__Output, _chat_MessageAck>;
  
}

export interface ChatServiceDefinition extends grpc.ServiceDefinition {
  JoinChannel: MethodDefinition<_chat_Channel, _chat_Message, _chat_Channel__Output, _chat_Message__Output>
  SendMessage: MethodDefinition<_chat_Message, _chat_MessageAck, _chat_Message__Output, _chat_MessageAck__Output>
}
