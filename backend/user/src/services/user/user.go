package user

import (
	"time"
	"fmt"
	"database/sql"
	"encoding/json"
	"github.com/gomodule/redigo/redis"
	logger "github.com/sirupsen/logrus"
	"../../errors"
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
	IsVerified bool
}

// CreateUser save an user to the database
func CreateUser(connection *config.DatabaseConnection, userDTO DTOCreateUser) (string, *errors.CustomError) {

	var id string
	err := connection.DB.QueryRow(
		`SELECT id FROM "user" WHERE email=$1`,userDTO.Email).Scan(&id)		

	if err != sql.ErrNoRows && err != nil {
		logger.Error("QueryRow existing user ->", err)
		return "", errors.New(err.Error(), 500)
	}

	if id != "" {
		return "", errors.New("User already exists in the database", 400)
	}	

	err = connection.DB.QueryRow(
		`INSERT INTO "user" (firstName,lastName, email, password, isVerified, createdAt) 
		VALUES($1, $2, $3, $4, $5, $6) RETURNING id`, userDTO.FirstName,
		userDTO.LastName, 
		userDTO.Email,
		userDTO.Password,
		false,
		time.Now()).Scan(&id)

	if err != nil {
		logger.Error("Insert ->",err)
		return "", errors.New(err.Error(), 500)
	}
	return id, nil
}

// GetUserByID returns the user's info searched by ID
func GetUserByID() {

}
// GetUserByEmail returns the user's info to auth microservice
func GetUserByEmail(connection *config.DatabaseConnection, userEmail string) (*DTOGetUserByEmail, *errors.CustomError){
	// Select user cache from redis server 
	connection.Cache.Do("SELECT", connection.CacheMap.UserDB)
	result, _ := redis.String(connection.Cache.Do("GET",userEmail))

	if result != "" {		
		user := DTOGetUserByEmail{}
		err := json.Unmarshal([]byte(result), &user)
		if err != nil {
			logger.Error("GetUserByEmail - jsonUnMarshal ->", err)
			return nil, errors.New(err.Error(), 500)
		}
		return &user, nil
	}

	dtoUser := new(DTOGetUserByEmail)
	err := connection.DB.QueryRow(
		`SELECT id, email, password, isverified FROM "user" WHERE email=$1`,userEmail).Scan(
			&dtoUser.ID, 
			&dtoUser.Email, 
			&dtoUser.Password,
			&dtoUser.IsVerified)			
	
	if err != nil && err == sql.ErrNoRows {
		return nil, errors.New("Doesn't exists a user with that email", 400)
	}
	if err != nil {
		logger.Error("GetUserByEmail - GetUser ->", err)
		return nil, errors.New(err.Error(), 500)

	}
	if(dtoUser.IsVerified) {
		jsonUser,err := json.Marshal(dtoUser)

		if err != nil {
			logger.Error("GetUserByEmail - jsonMarshal ->", err)
			return nil, errors.New(err.Error(), 500)
		}

		_, err = connection.Cache.Do("SET", userEmail, jsonUser)

		if err != nil {
			logger.Error("GetUserByEmail - setRedis ->", err)
			return nil, errors.New(err.Error(), 500)
		}
	}

	return dtoUser, nil
}

// GetListUser returns the user list of the database
func GetListUser() {

}

// ActivateUser delete an user by email or id
func ActivateUser(connection *config.DatabaseConnection, idUser int32) (string, *errors.CustomError){
	_, err := connection.DB.Exec(			
		fmt.Sprintf(`UPDATE "user" SET isverified = %v WHERE id='%v'`,true,idUser))
		
	if err != nil {
		logger.Error("ActivateUser - DeleteUser ->", err)
		return "", errors.New(err.Error(), 500)

	}	

	return fmt.Sprintf("User with id: %v activated",idUser), nil
}

// DeleteUserByCondition delete an user by email or id
func DeleteUserByCondition(connection *config.DatabaseConnection, attribute string, value string) (string, *errors.CustomError){
	_, err := connection.DB.Exec(			
		fmt.Sprintf(`DELETE FROM "user" WHERE %v='%v'`,attribute,value))
		
	if err != nil {
		logger.Error("DeleteUserByCondition - DeleteUser ->", err)
		return "", errors.New(err.Error(), 500)

	}	

	return fmt.Sprintf("User with %v: %v deleted",attribute,value), nil
}