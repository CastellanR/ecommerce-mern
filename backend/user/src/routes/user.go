package routes

import (
	user "../../src/services/user"
	"../config"
	"github.com/gin-gonic/gin"
)

//TODO Add activateUser endpoint

func userRoutes(router *gin.RouterGroup, connection *config.DatabaseConnection){
	prefix := router.Group("/users")
	{
		prefix.GET(":id", func (c *gin.Context) {
			user.GetUserByID()
		})
		prefix.GET("", func (c *gin.Context) {
			user.GetListUser()
		})
	}
}