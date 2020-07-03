import cryptoJs from "crypto-js";
import envConfig from "../config/env"

const hash_key = envConfig.cryptoKey;

export const encrypt = (text: string | number) =>
  ("" + cryptoJs.AES.encrypt(text.toString(), hash_key))
    .split("/")
    .join("(*u*)");

export const decrypt = (text: string) => {
  text = text.toString().split("(*u*)").join("/");
  let bytes = cryptoJs.AES.decrypt(text, hash_key);
  const bytesString = bytes.toString(cryptoJs.enc.Utf8);
  return bytesString.split('"').join("");
};
