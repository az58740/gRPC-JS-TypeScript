import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ChatClient as _chat_package_ChatClient, ChatDefinition as _chat_package_ChatDefinition } from './chat_package/Chat';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  chat_package: {
    Chat: SubtypeConstructor<typeof grpc.Client, _chat_package_ChatClient> & { service: _chat_package_ChatDefinition }
    ClientMessage: MessageTypeDefinition
    ServerMessage: MessageTypeDefinition
  }
}

