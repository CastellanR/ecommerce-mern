package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

//Enviroment provides all enviroments vars
type Enviroment struct {
  Port, GrpcPort int
  Host, dbUser, dbPassword, dbName,dbPort,rabbitURL,cryptoKey,APIPrefix, env string
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
    fmt.Println("Error loading .env file")
  }

  config = map[string]Enviroment{
    "local": {
      Port: 5001,
      Host: os.Getenv("HOST"),
      dbUser:  os.Getenv("DB_USER"),
      dbPassword:  os.Getenv("DB_PASSWORD"),
      dbName:  os.Getenv("DB_NAME"),
      dbPort:  os.Getenv("PORT"),
      rabbitURL: "amqp://localhost",
      GrpcPort: 6001,
      cryptoKey: os.Getenv("CRYPTO_KEY"),
      APIPrefix: "/api",
      env: env,
    },
    "test": {
      Port: 5001,
      Host: os.Getenv("HOST"),
      dbUser:  os.Getenv("DB_USER"),
      dbPassword:  os.Getenv("DB_PASSWORD"),
      dbName:  os.Getenv("DB_NAME"),
      dbPort:  os.Getenv("PORT"),
      rabbitURL: "amqp://localhost",
      GrpcPort: 6001,
      cryptoKey: os.Getenv("CRYPTO_KEY"),
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