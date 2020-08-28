import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { register, login, logout } from "./userService";

const initialState = {
  currentUser: null,
  isAuthenticated: localStorage.getItem("token") ? true : false,
  status: "idle",
  token: localStorage.getItem("token"),
  error: null,
};

export const registerUser = createAsyncThunk(
  "/user/register",
  async (userInfo, { rejectWithValue }) => {
    try {
      return await register(userInfo);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "/user/login",
  async (userCredentials, { rejectWithValue }) => {
    try {
      return await login(userCredentials);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "/user/logout",
  async (token, { rejectWithValue }) => {
    try {
      return await logout(token);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.status = "loading";
    },
    [registerUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.error = null;
    },
    [registerUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [loginUser.pending]: (state) => {
      state.status = "loading";
    },
    [loginUser.fulfilled]: (state, action) => {
      localStorage.setItem("token", action.payload.message.token);
      state.token = action.payload.message.token;
      state.currentUser = {
        email: action.payload.message.email,
        idUser: action.payload.message.idUser,
      };
      state.status = "succeeded";
      state.error = null;
      state.isAuthenticated = true;
    },
    [loginUser.rejected]: (state, action) => {
      localStorage.removeItem("token");
      state.status = "failed";
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    [logoutUser.pending]: (state) => {
      state.status = "loading";
    },
    [logoutUser.fulfilled]: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.currentUser = null;
      state.status = "succeeded";
      state.error = null;
      state.isAuthenticated = false;
    },
    [logoutUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const selectUser = (state) => state.user.currentUser;
export const selectUserStatus = (state) => state.user.isAuthenticated;
export const selectToken = (state) => state.user.token;

export default userSlice.reducer;
