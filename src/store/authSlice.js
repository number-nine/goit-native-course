import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: null,
    email: null,
    password: null,
    isLoggedIn: false,
    uid:null,
  },
  reducers: {
    login: {
      reducer: (state, action) => (state = action.payload),
      prepare: (user) => ({ payload: { ...user, isLoggedIn: true, password:null } }),
    },
    logout: () => ({ name: null, email: null, password:null, isLoggedIn: false }),
    update: (state, action) => { console.log(state); return({ ...state, ...action.payload })}
     
  },
});

export const { login, logout, update } = authSlice.actions;

export default authSlice.reducer;
