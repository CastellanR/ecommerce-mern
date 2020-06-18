package config

import (
	logger "github.com/sirupsen/logrus"
	"fmt"
	"github.com/jmoiron/sqlx"
	// Postgres driver
	_ "github.com/lib/pq"
)
//DB structure
type DB struct {
	*sqlx.DB
}

type inventory struct {
	id int
	name string
	quantity int
}

// InitDB provides a connection
func InitDB() *DB{	
	exportConfig := GetEnvConfig()

	connStr := fmt.Sprintf(
		"postgres://%v:%v@%v:%v/%v?sslmode=disable",
		exportConfig.dbUser,
		exportConfig.dbPassword,
		exportConfig.Host, 
		exportConfig.dbPort,
		exportConfig.dbName)

	db, err := sqlx.Connect("postgres", connStr)

	if err != nil {
    logger.Error(fmt.Sprintf("Unable to connect to database: %v\n", err))
	}
	loadTables(&DB{db})
	return &DB{db}
}

// Load all the tables needed for the microservice
func loadTables(db *DB) {
_, err := db.Exec(`
	CREATE TABLE IF NOT EXISTS "user" (
		id serial PRIMARY KEY NOT NULL, 
		firstName text NOT NULL,
		lastName text NOT NULL, 
		email text NOT NULL, 
		password text NOT NULL, 
		createdAt timestamp NOT NULL,
		updatedAt timestamp NULL,
		deletedAt timestamp NULL
		);`)

	if err != nil {
		logger.Error(err)
	} 
}
