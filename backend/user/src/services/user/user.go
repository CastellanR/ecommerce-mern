package user

import (
	"time"
	"encoding/json"
	"github.com/gomodule/redigo/redis"
	// logger "github.com/sirupsen/logrus"
	// "../../models"
	"../../config"
)

//DTOCreateUser type
type DTOCreateUser struct{
	FirstName string
	LastName string
	Email string
	Password string
}

//DTOGetUserByEmail type
type DTOGetUserByEmail struct {
	ID int32
	Email string
	Password string
}

// CreateUser save an user to the database
func CreateUser(connection *config.DatabaseConnection, userDTO DTOCreateUser) (string, error) {		
	var id string
	err := connection.DB.QueryRow(
		`INSERT INTO "user" (firstName,lastName, email, password,createdAt) 
		VALUES($1, $2, $3, $4, $5) RETURNING id`, userDTO.FirstName,
		userDTO.LastName, 
		userDTO.Email,
		userDTO.Password,
		time.Now()).Scan(&id)

	if err != nil {
		return "", err
	}
	return id, nil
}

// GetUserByID returns the user's info searched by ID
func GetUserByID() {

}
// GetUserByEmail returns the user's info to auth microservice
func GetUserByEmail(connection *config.DatabaseConnection, userEmail string) (*DTOGetUserByEmail, error){
	// Select user cache from redis server 
	connection.Cache.Do("SELECT", connection.CacheMap.UserDB)
	result, _ := redis.String(connection.Cache.Do("GET",userEmail))

	if result != "" {		
		user := DTOGetUserByEmail{}
		err := json.Unmarshal([]byte(result), &user)
		if err != nil {		
			return nil, err
		}
		return &user, nil
	}

	dtoUser := new(DTOGetUserByEmail)
	err := connection.DB.QueryRow(
		`SELECT id, email, password FROM "user" WHERE email=$1`,userEmail).Scan(
			&dtoUser.ID, 
			&dtoUser.Email, 
			&dtoUser.Password)			
			
	if err != nil {		
		return nil, err
	}

	jsonUser,err := json.Marshal(dtoUser)

	if err != nil {		
		return nil, err
	}

	_, err = connection.Cache.Do("SET", userEmail, jsonUser)

	if err != nil {		
		return nil, err
	}

	return dtoUser, nil
}

// GetListUser returns the user list of the database	
func GetListUser() {

}