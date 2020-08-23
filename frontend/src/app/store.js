import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userReducer";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
