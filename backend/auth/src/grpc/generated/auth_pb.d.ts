// package: auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ValidateUserRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ValidateUserRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateUserRequest): ValidateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateUserRequest;
    static deserializeBinaryFromReader(message: ValidateUserRequest, reader: jspb.BinaryReader): ValidateUserRequest;
}

export namespace ValidateUserRequest {
    export type AsObject = {
        token: string,
    }
}

export class ValidateUserResponse extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): ValidateUserResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateUserResponse): ValidateUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateUserResponse;
    static deserializeBinaryFromReader(message: ValidateUserResponse, reader: jspb.BinaryReader): ValidateUserResponse;
}

export namespace ValidateUserResponse {
    export type AsObject = {
        status: boolean,
    }
}
