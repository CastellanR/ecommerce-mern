package routes

import (
	config "../config"
	"github.com/gin-gonic/gin"
)

//SetupRouter export services routes to main file
func SetupRouter(db *config.DB) *gin.Engine {
	router := gin.Default()
	prefix := router.Group(config.GetEnvConfig().APIPrefix)
	{
		prefix.GET("/status", Status)
		userRoutes(prefix, db)
	}
	return router
}
// Status show microservice health
func Status(c *gin.Context) {
	c.Done()
}