// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var auth_pb = require('./auth_pb.js');

function serialize_auth_ValidateUserRequest(arg) {
  if (!(arg instanceof auth_pb.ValidateUserRequest)) {
    throw new Error('Expected argument of type auth.ValidateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_ValidateUserRequest(buffer_arg) {
  return auth_pb.ValidateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_ValidateUserResponse(arg) {
  if (!(arg instanceof auth_pb.ValidateUserResponse)) {
    throw new Error('Expected argument of type auth.ValidateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_ValidateUserResponse(buffer_arg) {
  return auth_pb.ValidateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthService = exports.AuthService = {
  validateUser: {
    path: '/auth.Auth/validateUser',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.ValidateUserRequest,
    responseType: auth_pb.ValidateUserResponse,
    requestSerialize: serialize_auth_ValidateUserRequest,
    requestDeserialize: deserialize_auth_ValidateUserRequest,
    responseSerialize: serialize_auth_ValidateUserResponse,
    responseDeserialize: deserialize_auth_ValidateUserResponse,
  },
};

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
