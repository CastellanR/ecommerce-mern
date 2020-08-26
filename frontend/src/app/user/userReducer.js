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
  async (userCredentials, { rejectWithValue }) => {
    try {
      return await login(userCredentials);
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
  },
});

export const selectUser = (state) => state.user.currentUser;

export const { logout } = userSlice.actions;

export default userSlice.reducer;
