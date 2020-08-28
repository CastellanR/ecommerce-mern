const dotenv = require('dotenv');

const env = process.env["NODE_ENV"];

const exportConfig = {
  authUrl: process.env.REACT_APP_AUTH_SERVICE,
  env: env,
};
console.log("exportConfig", exportConfig)
export default exportConfig;
