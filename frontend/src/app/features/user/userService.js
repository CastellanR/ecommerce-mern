import axios from "axios";
import config from "../../config/config";
import { customError } from "../../helpers/index";

const agent = navigator.platform;
const deviceName = navigator.userAgent.substring(
  navigator.userAgent.indexOf(";") + 1,
  navigator.userAgent.indexOf(")")
);

export const register = async ({ email, password, firstName, lastName }) => {
  try {
    return (
      await axios.post(config.authUrl + "/register", {
        email,
        password,
        firstName,
        lastName,
      })
    ).data;
  } catch (error) {
    throw customError(error);
  }
};

export const login = async ({ email, password, keepSessionActive }) => {
  try {
    return (
      await axios.post(config.authUrl + "/login", {
        email,
        password,
        keepSessionActive,
        agent,
        deviceName,
      })
    ).data;
  } catch (error) {
    throw customError(error);
  }
};

export const logout = async (token) => {
  console.log("logout -> token", token);
  try {
    return (
      await axios.post(
        config.authUrl + "/logout",
        {},
        { headers: { Authorization: token } }
      )
    ).data;
  } catch (error) {
    throw customError(error);
  }
};
