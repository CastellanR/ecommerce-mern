
package main

import (
	"fmt"
	_ "github.com/joho/godotenv/autoload"
)

import config "./config"
import routes "./routes"

func main() {

	// Creating a connection to the database
	config.InitDB()

	// Routes 
	router := routes.SetupRouter()

	// Start serving the application
	router.Run(fmt.Sprintf(":%v",config.ExportConfig.Port))
	fmt.Println("Runned!")
}