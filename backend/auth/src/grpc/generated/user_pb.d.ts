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

    getIsverified(): boolean;
    setIsverified(value: boolean): GetUserByEmailResponse;


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
        isverified: boolean,
    }
}

export class DeleteUserByConditionRequest extends jspb.Message { 
    getAttribute(): string;
    setAttribute(value: string): DeleteUserByConditionRequest;

    getValue(): string;
    setValue(value: string): DeleteUserByConditionRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserByConditionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserByConditionRequest): DeleteUserByConditionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserByConditionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserByConditionRequest;
    static deserializeBinaryFromReader(message: DeleteUserByConditionRequest, reader: jspb.BinaryReader): DeleteUserByConditionRequest;
}

export namespace DeleteUserByConditionRequest {
    export type AsObject = {
        attribute: string,
        value: string,
    }
}

export class DeleteUserByConditionResponse extends jspb.Message { 
    getResponse(): string;
    setResponse(value: string): DeleteUserByConditionResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserByConditionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserByConditionResponse): DeleteUserByConditionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserByConditionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserByConditionResponse;
    static deserializeBinaryFromReader(message: DeleteUserByConditionResponse, reader: jspb.BinaryReader): DeleteUserByConditionResponse;
}

export namespace DeleteUserByConditionResponse {
    export type AsObject = {
        response: string,
    }
}

export class ActivateUserRequest extends jspb.Message { 
    getIduser(): number;
    setIduser(value: number): ActivateUserRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ActivateUserRequest): ActivateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivateUserRequest;
    static deserializeBinaryFromReader(message: ActivateUserRequest, reader: jspb.BinaryReader): ActivateUserRequest;
}

export namespace ActivateUserRequest {
    export type AsObject = {
        iduser: number,
    }
}

export class ActivateUserResponse extends jspb.Message { 
    getResponse(): string;
    setResponse(value: string): ActivateUserResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivateUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ActivateUserResponse): ActivateUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivateUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivateUserResponse;
    static deserializeBinaryFromReader(message: ActivateUserResponse, reader: jspb.BinaryReader): ActivateUserResponse;
}

export namespace ActivateUserResponse {
    export type AsObject = {
        response: string,
    }
}
