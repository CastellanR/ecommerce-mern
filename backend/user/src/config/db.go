package config

import (
	"github.com/jackc/pgx"
	"context"
	"fmt"
	"os"
	"database/sql"
)

var db *sql.DB

// InitDB provides a connection
func InitDB() {	
	exportConfig := GetEnvConfig()

	connectionString := fmt.Sprintf(
		"postgres://%v:%v@%v:%v/%v",
		exportConfig.dbUser,
		exportConfig.dbPassword,
		exportConfig.Host, 
		exportConfig.dbPort,
		exportConfig.dbName)

	conn, err := pgx.Connect(context.Background(), connectionString)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}
	defer conn.Close(context.Background())
}
