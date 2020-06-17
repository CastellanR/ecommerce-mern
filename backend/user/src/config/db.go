package config

import (
	"fmt"
	"os"

	"github.com/jmoiron/sqlx"
	// Postgres driver
	_ "github.com/lib/pq"
)
//DB structure
type DB struct {
	*sqlx.DB
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
    fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}
	return &DB{db}
}
