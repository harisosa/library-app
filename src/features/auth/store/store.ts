import { createSlice } from "@reduxjs/toolkit";
import type { AuthStatus, AuthUser } from "../types";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  setUser,
  setToken,
  clearAuthError,
  logout,
} from "./reducers";

export type AuthState = {
  accessToken: string | null;
  user: AuthUser | null;
  status: AuthStatus;
  error: string | null;
};

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