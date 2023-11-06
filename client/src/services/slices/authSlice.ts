import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../constants/authConstants";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // @desc  Set http token
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    // @desc  Logout user, delete token
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
