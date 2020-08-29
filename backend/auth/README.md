# Auth microservice

Provides all the users information to the frontend and others microservices.

## Technologies

* Typescript
* Express
* MongoDB
* Bunyan
* Jest
* gRPC

## Setup

Create the following files:

* .env in src folder
* test.env in test folder

Both files must have this structure

* NODE_ENV
* CRYPTO_KEY
* SECRET_JWT

## Run scripts

* Server: npm start
* Test suite: npm test

## Command to generate proto buffers (execute inside proto folder)

 protoc --plugin=protoc-gen-ts=../../../../node_modules/.bin/protoc-gen-ts --plugin=protoc-gen-grpc=../../../../node_modules/.bin/grpc_tools_node_protoc_plugin --js_out=import_style=commonjs,binary:../../generated --ts_out=service=grpc-node:../../generated --grpc_out=../../generated ./user.proto

## Access to swagger docs

  appUrl:5000/swagger
