package routes

import (
	// "../Controllers"
	"github.com/gin-gonic/gin"
)

//SetupRouter export services routes to main file
func SetupRouter() *gin.Engine {
	router := gin.Default()
	// v1 := router.Group("/v1")
	router.GET("/hello", func(c *gin.Context) {
		c.String(200, `{"message":"hello, hello, hello"}`)
})
	/*{
		v1.GET("todo", Controllers.GetTodos)
		v1.POST("todo", Controllers.CreateATodo)
		v1.GET("todo/:id", Controllers.GetATodo)
		v1.PUT("todo/:id", Controllers.UpdateATodo)
		v1.DELETE("todo/:id", Controllers.DeleteATodo)
	}*/
	return router
}