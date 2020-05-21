
package main

import (
	"fmt"

	config "./config"
	routes "./routes"
)

func main() {
	// Loading enviroment variables
	exportConfig := config.LoadEnv()
	// Creating a connection to the database
	config.InitDB()

	// Routes 
	router := routes.SetupRouter()

	// Start serving the application
	router.Run(fmt.Sprintf(":%v",exportConfig.Port))
	fmt.Println("Runned!")
}