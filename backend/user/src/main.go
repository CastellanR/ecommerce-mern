
package main

import (
	"fmt"

	config "./config"
	"./grpc"
	routes "./routes"
)

func main() {
	// Loading enviroment variables
	exportConfig := config.LoadEnv()

	// Creating a connection to the database
	db := config.InitDB()

	// Creating a connection to the redis cache
	redisConnection := config.InitCache()	

	dataStruct := config.DatabaseConnection{DB: db, Cache: redisConnection}
	
	//Start gRPCServer
	go grpc.StartGRPCServer(&dataStruct)
	// Routes 
	router := routes.SetupRouter(&dataStruct)
	
	// Start serving the application
	router.Run(fmt.Sprintf(":%v",exportConfig.Port))
	
	defer redisConnection.Close()
	defer db.Close()
}