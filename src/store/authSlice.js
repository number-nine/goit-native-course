import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: null,
    email: null,
    isLoggedIn: false,
  },
  reducers: {
    login: {
      reducer: (state, action) => (state = action.payload),
      prepare: (user) => ({ payload: { ...user, isLoggedIn: true } }),
    },
    logout: () => ({ userName: "", isLoggedIn: false }),
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
