import axios from "axios";
import config from "../config/config";
import { customError } from "../helpers/index";

const agent = navigator.platform;
const deviceName = navigator.userAgent.substring(
  navigator.userAgent.indexOf(";") + 1,
  navigator.userAgent.indexOf(")")
);

export const login = async ({ email, password, keepSessionActive }) => {
  try {
    return (await axios.post(config.authUrl + "/login", {
      email,
      password,
      keepSessionActive,
      agent,
      deviceName,
    })).data;
  } catch (error) {
    console.log("login -> error", error.response);
    throw customError(error);
  }
};
