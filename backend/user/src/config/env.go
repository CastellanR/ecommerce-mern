package config

import (
	"fmt"
	"os"
	logger "github.com/sirupsen/logrus"
	"github.com/joho/godotenv"
)

//Enviroment provides all enviroments vars
type Enviroment struct {
  Port, GrpcPort int
  Host, RedisHost,RedisPort, dbUser, dbPassword, dbName,dbPort,rabbitURL,APIPrefix, env string
}

var config map[string]Enviroment
var env string

// LoadEnv load on memory the env vars
func LoadEnv () Enviroment{
  var err error
  env = os.Args[2]

  if env == "local" {
    err = godotenv.Load()
  } else {
    env = os.Args[3]
    err = godotenv.Load("test.env")
  }

  if err != nil {
    logger.Error(fmt.Sprintf("Error loading .env file %v",err)) 
  }

  config = map[string]Enviroment{
    "local": {
      Port: 5001,
      Host: os.Getenv("HOST"),
      dbUser:  os.Getenv("DB_USER"),
      dbPassword:  os.Getenv("DB_PASSWORD"),
      dbName:  os.Getenv("DB_NAME"),
      dbPort:  os.Getenv("DB_PORT"),
      RedisHost: os.Getenv("REDIS_HOST"),
      RedisPort: os.Getenv("REDIS_PORT"),
      rabbitURL: "amqp://localhost",
      GrpcPort: 6001,
      APIPrefix: "/api",
      env: env,
    },
    "test": {
      Port: 5001,
      Host: os.Getenv("HOST"),
      dbUser:  os.Getenv("DB_USER"),
      dbPassword:  os.Getenv("DB_PASSWORD"),
      dbName:  os.Getenv("DB_NAME"),
      dbPort:  os.Getenv("DB_PORT"),
      RedisHost: os.Getenv("REDIS_HOST"),
      RedisPort: os.Getenv("REDIS_PORT"),
      rabbitURL: "amqp://localhost",
      GrpcPort: 6001,
      APIPrefix: "/api",
      env: env,
    },
  }
  return config[env]
}


// GetEnvConfig provides all the enviroment configuration for the microservice
func GetEnvConfig() Enviroment{
  return config[env]
}