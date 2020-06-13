package routes

import (
	// "../Controllers"
	"github.com/gin-gonic/gin"
	config "../config"
)

//SetupRouter export services routes to main file
func SetupRouter() *gin.Engine {
	router := gin.Default()
	prefix := router.Group(config.GetEnvConfig().APIPrefix)
	{
		prefix.GET("/status", Status)
		userRoutes(prefix)
	}
	return router
}
// Status show microservice health
func Status(c *gin.Context) {
	c.Done()
}