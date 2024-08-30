// package: chat
// file: chat.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Channel extends jspb.Message { 
    getName(): string;
    setName(value: string): Channel;
    getSendersName(): string;
    setSendersName(value: string): Channel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Channel.AsObject;
    static toObject(includeInstance: boolean, msg: Channel): Channel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Channel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Channel;
    static deserializeBinaryFromReader(message: Channel, reader: jspb.BinaryReader): Channel;
}

export namespace Channel {
    export type AsObject = {
        name: string,
        sendersName: string,
    }
}

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;
    getName(): string;
    setName(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        name: string,
    }
}

export class Message extends jspb.Message { 
    getSender(): string;
    setSender(value: string): Message;

    hasChannel(): boolean;
    clearChannel(): void;
    getChannel(): Channel | undefined;
    setChannel(value?: Channel): Message;
    getMessage(): string;
    setMessage(value: string): Message;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
    export type AsObject = {
        sender: string,
        channel?: Channel.AsObject,
        message: string,
    }
}

export class MessageAck extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): MessageAck;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MessageAck.AsObject;
    static toObject(includeInstance: boolean, msg: MessageAck): MessageAck.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MessageAck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MessageAck;
    static deserializeBinaryFromReader(message: MessageAck, reader: jspb.BinaryReader): MessageAck;
}

export namespace MessageAck {
    export type AsObject = {
        status: string,
    }
}

export class ChatRequest extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): ChatRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChatRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChatRequest): ChatRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChatRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChatRequest;
    static deserializeBinaryFromReader(message: ChatRequest, reader: jspb.BinaryReader): ChatRequest;
}

export namespace ChatRequest {
    export type AsObject = {
        message: string,
    }
}

export class ChatResponse extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): ChatResponse;
    getMessage(): string;
    setMessage(value: string): ChatResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChatResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChatResponse): ChatResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChatResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChatResponse;
    static deserializeBinaryFromReader(message: ChatResponse, reader: jspb.BinaryReader): ChatResponse;
}

export namespace ChatResponse {
    export type AsObject = {
        username: string,
        message: string,
    }
}
