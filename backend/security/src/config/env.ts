const env : string = process.env["NODE_ENV"];

const local = {
  port: 5000,
  mongoUri: "mongodb://localhost:27017/security-local",
  rabbitUrl: "amqp://localhost",
  grpcAccess: "localhost:6000",
  cryptoKey: process.env.CRYPTO_KEY,
  env: env
};

const test = {
  port: 7000,
  mongoUri: "mongodb://localhost:27017/security-local",
  rabbitUrl: "amqp://localhost",
  grpcAccess: "localhost:6000",
  cryptoKey: process.env.CRYPTO_KEY,
  env: env
};

const config = {
  local,
  test
};

const exportConfig = (<any>config)[env];
export default exportConfig;