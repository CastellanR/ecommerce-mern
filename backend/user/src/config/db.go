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

connectionString := fmt.Sprintf(
	"postgres://%v:%v@%v:%v/%v",
	ExportConfig.dbUser,
	ExportConfig.dbPassword,
	ExportConfig.host, 
	ExportConfig.dbPort,
	ExportConfig.dbName)

conn, err := pgx.Connect(context.Background(), connectionString)
if err != nil {
	fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
	os.Exit(1)
}
defer conn.Close(context.Background())
}
