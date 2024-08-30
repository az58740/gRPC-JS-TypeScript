// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var chat_pb = require('./chat_pb.js');

function serialize_chat_Channel(arg) {
  if (!(arg instanceof chat_pb.Channel)) {
    throw new Error('Expected argument of type chat.Channel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_Channel(buffer_arg) {
  return chat_pb.Channel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_ChatRequest(arg) {
  if (!(arg instanceof chat_pb.ChatRequest)) {
    throw new Error('Expected argument of type chat.ChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_ChatRequest(buffer_arg) {
  return chat_pb.ChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_ChatResponse(arg) {
  if (!(arg instanceof chat_pb.ChatResponse)) {
    throw new Error('Expected argument of type chat.ChatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_ChatResponse(buffer_arg) {
  return chat_pb.ChatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_Message(arg) {
  if (!(arg instanceof chat_pb.Message)) {
    throw new Error('Expected argument of type chat.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_Message(buffer_arg) {
  return chat_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_MessageAck(arg) {
  if (!(arg instanceof chat_pb.MessageAck)) {
    throw new Error('Expected argument of type chat.MessageAck');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_MessageAck(buffer_arg) {
  return chat_pb.MessageAck.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatServiceService = exports.ChatServiceService = {
  joinChannel: {
    path: '/chat.ChatService/JoinChannel',
    requestStream: false,
    responseStream: true,
    requestType: chat_pb.Channel,
    responseType: chat_pb.Message,
    requestSerialize: serialize_chat_Channel,
    requestDeserialize: deserialize_chat_Channel,
    responseSerialize: serialize_chat_Message,
    responseDeserialize: deserialize_chat_Message,
  },
  sendMessage: {
    path: '/chat.ChatService/SendMessage',
    requestStream: true,
    responseStream: false,
    requestType: chat_pb.Message,
    responseType: chat_pb.MessageAck,
    requestSerialize: serialize_chat_Message,
    requestDeserialize: deserialize_chat_Message,
    responseSerialize: serialize_chat_MessageAck,
    responseDeserialize: deserialize_chat_MessageAck,
  },
  chat: {
    path: '/chat.ChatService/Chat',
    requestStream: true,
    responseStream: true,
    requestType: chat_pb.ChatRequest,
    responseType: chat_pb.ChatResponse,
    requestSerialize: serialize_chat_ChatRequest,
    requestDeserialize: deserialize_chat_ChatRequest,
    responseSerialize: serialize_chat_ChatResponse,
    responseDeserialize: deserialize_chat_ChatResponse,
  },
};

exports.ChatServiceClient = grpc.makeGenericClientConstructor(ChatServiceService);
