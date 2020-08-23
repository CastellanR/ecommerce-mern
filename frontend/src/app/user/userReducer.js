import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "./userService";

const initialState = {
  currentUser: null,
  isAuthenticated: false,
  status: "idle",
  token: localStorage.getItem("token"),
  error: null,
};

export const loginUser = createAsyncThunk(
  "/user/login",
  async (user) => (await login(user)).body
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.status = "loading";
    },
    [loginUser.fulfilled]: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.currentUser = {
        email: action.payload.email,
        idUser: action.payload.idUser,
      };
      state.status = "succeeded";
    },
    [loginUser.rejected]: (state, action) => {
      localStorage.removeItem("token");
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const selectUser = (state) => state.user.currentUser;

export const { logout } = userSlice.actions;

export default userSlice.reducer;
