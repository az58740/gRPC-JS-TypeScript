import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ExampleClient as _chat_package_ExampleClient, ExampleDefinition as _chat_package_ExampleDefinition } from './chat_package/Example';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  chat_package: {
    ClientMessage: MessageTypeDefinition
    Example: SubtypeConstructor<typeof grpc.Client, _chat_package_ExampleClient> & { service: _chat_package_ExampleDefinition }
    ServerMessage: MessageTypeDefinition
  }
}

