// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var chat_pb = require('./chat_pb.js');

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


var ChatServiceService = exports.ChatServiceService = {
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
