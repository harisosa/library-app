import { authStore } from "./store";

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  setUser,
  setToken,
  clearAuthError,
  logout,
} = authStore.actions;