package config

import (
  "os"
  "github.com/joho/godotenv"
  "fmt"
)

func loadEnv () {
  var err = godotenv.Load()

  if err != nil {
    fmt.Println("Error loading .env file")
  }
}
var env = os.Getenv("ENVIROMENT")

//Enviroment provides all enviroments vars
type Enviroment struct {
  Port int
  host, dbUser, dbPassword, dbName,dbPort,rabbitURL, grpcAccess, cryptoKey,apiPrefix, env string
}

var config = map[string]Enviroment{
  "local": Enviroment{
    Port: 5001,
    host: os.Getenv("HOST"),
    dbUser:  os.Getenv("DB_USER"),
    dbPassword:  os.Getenv("DB_PASSWORD"),
    dbName:  os.Getenv("DB_NAME"),
    dbPort:  os.Getenv("PORT"),
    rabbitURL: "amqp://localhost",
    grpcAccess: "localhost:6001",
    cryptoKey: os.Getenv("CRYPTO_KEY"),
    apiPrefix: "/api",
    env: env,
  },
  "test": Enviroment{
    Port: 7001,
    host: os.Getenv("HOST"),
    dbUser:  os.Getenv("DB_USER"),
    dbPassword:  os.Getenv("DB_PASSWORD"),
    dbName:  os.Getenv("DB_NAME"),
    dbPort:  os.Getenv("PORT"),
    rabbitURL: "amqp://localhost",
    grpcAccess: "localhost:6001",
    cryptoKey: os.Getenv("CRYPTO_KEY"),
    apiPrefix: "/api",
    env: env,
  },
}

// ExportConfig provides all the enviroment configuration for the microservice
var ExportConfig = config[env];