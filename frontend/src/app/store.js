import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userReducer";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
