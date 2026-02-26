import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "../types";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  setUser,
  setToken,
  clearAuthError,
  logout,
} from "./reducers";

const initialState: AuthState = {
  accessToken: null,
  user: null,
  status: "idle",
  error: null,
};

export const authStore = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart,
    loginSuccess,
    loginFailure,
    setUser,
    setToken,
    clearAuthError,
    logout,
  },
});

export const authReducer = authStore.reducer;

export const authActions = authStore.actions;