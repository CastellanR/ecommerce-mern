package models

//User schema
type User struct {
	Base
	FirstName	string	`db:"firstName" json:"firstName"`
	LastName	string	`db:"lastName" json:"lastName"`
	Email	string	`db:"email" json:"email"`
	Password	string	`db:"password" json:"password"`
	IsVerified bool	`db:"isVerified" json:"isVerified"`
}