package models

import (
	"time"
)

//Base schema to all models
type Base struct {
	ID	string	`sql:"type:uuid;primary_key;default:uuid_generate_v4()" json:"id"`
	CreatedAt time.Time	`json:"created_at"`
	UpdatedAt time.Time	`json:"updated_at"`
	DeletedAt	time.Time	`json:"deleted_at"`
}