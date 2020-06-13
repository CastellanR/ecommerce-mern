package routes

import (
	"github.com/gin-gonic/gin"
	user "../services/user"
)


func userRoutes(router *gin.RouterGroup){
	prefix := router.Group("/users")
	{
		prefix.POST("", user.CreateUser)
		prefix.GET(":id", user.GetUserByID)
		prefix.GET("", user.GetListUser)
	}
}