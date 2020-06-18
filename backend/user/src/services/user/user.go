package user

import (
	"time"
	// "../../models"
	// logger "github.com/sirupsen/logrus"
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
func CreateUser(db *config.DB, userDTO DTOCreateUser) (string, error) {		
	var id string
	err := db.QueryRow(
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
func GetUserByEmail(db *config.DB, userEmail string) (*DTOGetUserByEmail, error){
	dtoUser := new(DTOGetUserByEmail)
	err := db.QueryRow(
		`SELECT id, email, password FROM "user" WHERE email=$1`,userEmail).Scan(
			&dtoUser.ID, 
			&dtoUser.Email, 
			&dtoUser.Password)
		
	if err != nil {		
		return nil, err
	}
	return dtoUser, nil
}

// GetListUser returns the user list of the database	
func GetListUser() {

}