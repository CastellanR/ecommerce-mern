package user

import (
	"fmt"
	"time"

	"../../config"
	"golang.org/x/crypto/bcrypt"
)

//DTOCreateUser type
type DTOCreateUser struct{
	FirstName string
	LastName string
	Email string
	Password string
}

// CreateUser save an user to the database
func CreateUser(db *config.DB, userDTO DTOCreateUser) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword(
		[]byte(userDTO.Password),
		bcrypt.DefaultCost,
		)
		if err != nil {
			return "Error", err
		}

		var id string
		db.QueryRow("INSERT INTO user (firstName,lastName, email, password,created_at) VALUES($1, $2, $3, $4, $5) RETURNING id",
		userDTO.FirstName,
		userDTO.LastName, 
		userDTO.Email,
		string(hashedPassword),
		time.Now()).Scan(&id)
		fmt.Println(id)
		return "id", nil
}

// GetUserByID returns the user's info searched by ID
func GetUserByID() {

}

// GetListUser returns the user list of the database	
func GetListUser() {

}