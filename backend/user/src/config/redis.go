package config

import(
	"github.com/gomodule/redigo/redis"
	"fmt"
	logger "github.com/sirupsen/logrus"
)

//DatabaseConnection type
type DatabaseConnection struct {
	DB *DB
	Cache *Cache
	CacheMap *CacheDB
}

//Cache type
type Cache struct {
	redis.Conn
}

//CacheDB type
type CacheDB struct {
	UserDB int
}

//CacheMap indicate database number to cache info
var CacheMap = &CacheDB{UserDB: 0}

//InitCache run redis instance
func InitCache() *Cache{
	exportConfig := GetEnvConfig()
	redisConnection, err := redis.Dial("tcp", fmt.Sprintf("%v:%v",exportConfig.RedisHost, exportConfig.RedisPort))
	if err != nil {
		logger.Error(err)
	}
	return &Cache{redisConnection}
}