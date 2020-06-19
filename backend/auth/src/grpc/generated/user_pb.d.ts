// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CreateUserRequest extends jspb.Message { 
    getFirstname(): string;
    setFirstname(value: string): CreateUserRequest;

    getLastname(): string;
    setLastname(value: string): CreateUserRequest;

    getEmail(): string;
    setEmail(value: string): CreateUserRequest;

    getPassword(): string;
    setPassword(value: string): CreateUserRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
    static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
    export type AsObject = {
        firstname: string,
        lastname: string,
        email: string,
        password: string,
    }
}

export class CreateUserResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): CreateUserResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
    static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
    export type AsObject = {
        id: string,
    }
}

export class GetUserByEmailRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): GetUserByEmailRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserByEmailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserByEmailRequest): GetUserByEmailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserByEmailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserByEmailRequest;
    static deserializeBinaryFromReader(message: GetUserByEmailRequest, reader: jspb.BinaryReader): GetUserByEmailRequest;
}

export namespace GetUserByEmailRequest {
    export type AsObject = {
        email: string,
    }
}

export class GetUserByEmailResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): GetUserByEmailResponse;

    getEmail(): string;
    setEmail(value: string): GetUserByEmailResponse;

    getPassword(): string;
    setPassword(value: string): GetUserByEmailResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserByEmailResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserByEmailResponse): GetUserByEmailResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserByEmailResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserByEmailResponse;
    static deserializeBinaryFromReader(message: GetUserByEmailResponse, reader: jspb.BinaryReader): GetUserByEmailResponse;
}

export namespace GetUserByEmailResponse {
    export type AsObject = {
        id: number,
        email: string,
        password: string,
    }
}
