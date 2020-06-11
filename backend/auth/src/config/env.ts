const env : string = process.env["NODE_ENV"];

const local = {
  port: 5000,
  mongoUri: "mongodb://localhost:27017/auth-local",
  rabbitUrl: "amqp://localhost",
  grpcUser: "localhost:6001",
  cryptoKey: process.env.CRYPTO_KEY,
  apiPrefix: "/api",
  env: env
};

const test = {
  port: 7000,
  mongoUri: "mongodb://localhost:27017/auth-local",
  rabbitUrl: "amqp://localhost",
  grpcUser: "localhost:6001",
  cryptoKey: process.env.CRYPTO_KEY,
  apiPrefix: "/api",
  env: env
};

const config = {
  local,
  test
};

const exportConfig = (<any>config)[env];
export default exportConfig;