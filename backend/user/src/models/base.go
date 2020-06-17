package models

import (
	"time"

	uuid "github.com/jackc/pgtype/ext/gofrs-uuid"
)

//Base schema to all models
type Base struct {
	ID	uuid.UUID	`db:"id" json:"id"`
	CreatedAt time.Time	`db:"createdAt" json:"createdAt"`
	UpdatedAt time.Time	`db:"updatedAt" json:"updatedAt"`
	DeletedAt	time.Time	`db:"deletedAt" json:"deletedAt"`
}