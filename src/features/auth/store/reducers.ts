import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthUser, LoginResult } from "../types";
import { AuthState, authStore } from "@/features/auth/store/store";

export const loginStart = (s: AuthState) => {
  s.status = "loading";
  s.error = null;
};

export const loginSuccess = (s: AuthState, a: PayloadAction<LoginResult>) => {
  s.accessToken = a.payload.accessToken;
  s.user = a.payload.user;
  s.status = "authenticated";
  s.error = null;
};

export const loginFailure = (s: AuthState, a: PayloadAction<string>) => {
  s.accessToken = null;
  s.user = null;
  s.status = "unauthenticated";
  s.error = a.payload;
};

export const setUser = (s: AuthState, a: PayloadAction<AuthUser | null>) => {
  s.user = a.payload;
  s.status = s.accessToken ? "authenticated" : "unauthenticated";
};

export const setToken = (s: AuthState, a: PayloadAction<string | null>) => {
  s.accessToken = a.payload;
  s.status = a.payload ? "authenticated" : "unauthenticated";
};

export const clearAuthError = (s: AuthState) => {
  s.error = null;
};

export const logout = (s: AuthState) => {
  s.accessToken = null;
  s.user = null;
  s.status = "unauthenticated";
  s.error = null;
};

export const authReducer = authStore.reducer;