import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { BroadcastClient as _chat_BroadcastClient, BroadcastDefinition as _chat_BroadcastDefinition } from './chat/Broadcast';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  chat: {
    Broadcast: SubtypeConstructor<typeof grpc.Client, _chat_BroadcastClient> & { service: _chat_BroadcastDefinition }
    Close: MessageTypeDefinition
    Connect: MessageTypeDefinition
    Message: MessageTypeDefinition
    User: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
}

