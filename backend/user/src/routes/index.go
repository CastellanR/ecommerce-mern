package routes

import (
	config "../config"
	"github.com/gin-gonic/gin"
)

//SetupRouter export services routes to main file
func SetupRouter(connection *config.DatabaseConnection) *gin.Engine {
	router := gin.Default()
	prefix := router.Group(config.GetEnvConfig().APIPrefix)
	{
		prefix.GET("/status", Status)
		userRoutes(prefix, connection)
	}
	return router
}
// Status show microservice health
func Status(c *gin.Context) {
	c.Done()
}