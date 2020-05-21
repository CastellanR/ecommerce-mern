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
	}
	
	/*{
		v1.GET("todo", Controllers.GetTodos)
		v1.POST("todo", Controllers.CreateATodo)
		v1.GET("todo/:id", Controllers.GetATodo)
		v1.PUT("todo/:id", Controllers.UpdateATodo)
		v1.DELETE("todo/:id", Controllers.DeleteATodo)
	}*/
	return router
}
// Status show microservice health
func Status(c *gin.Context) {
	c.Done()
}