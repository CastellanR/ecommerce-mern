package routes

import (
	"github.com/gin-gonic/gin"
	user "../services/user"
)


func userRoutes(router *gin.RouterGroup){
	prefix := router.Group("/users")
	{
		prefix.POST("", func (c *gin.Context) {
			user.CreateUser()
		})
		prefix.GET(":id", func (c *gin.Context) {
			user.GetUserByID()
		})
		prefix.GET("", func (c *gin.Context) {
			user.GetListUser()
		})
	}
}