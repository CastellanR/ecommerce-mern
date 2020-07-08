# User microservice

Provides all the users information to the frontend and others microservices.

## Technologies

* Go
* Gin-Gonic
* PostgreSQL
* Redis
* Logrus
* gRPC
* Glide package manager

## Dependencies

* github.com/gin-gonic/gin
* github.com/lib/pq
* github.com/jmoiron/sqlx
* github.com/gomodule/redigo/redis
* github.com/joho/godotenv
* github.com/sirupsen/logrus
* google.golang.org/grpc
* github.com/golang/protobuf/protoc-gen-go
* protobuf-go (yaourt)

## Setup

docker run --name postgres -p host:5432:5432 -e POSTGRES_PASSWORD="PASS" -d postgres
docker run --name redis -p 127.0.0.1:6379:6379 -e ALLOW_EMPTY_PASSWORD=no -e REDIS_PASSWORD="PASS" -d redis

docker start postgres
docker start redis

Create the following files:

* .env in src folder
* test.env in test folder

Both files must have this structure

* DB_USER
* DB_PASSWORD
* DB_NAME
* HOST
* PORT

## Run scripts

* Server: go run main.go -- local (in src folder)
* Test suite: go test -- test (in test folder)

## Command to generate proto buffers

protoc -I=. --go_out=plugins=grpc:. ./user.proto
