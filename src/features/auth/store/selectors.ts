import { AuthState } from "@/features/auth/types";

type RootStateLike = { auth: AuthState };

export const selectAuth = (s: RootStateLike) => s.auth;

export const selectAccessToken = (s: RootStateLike) => selectAuth(s).accessToken;
export const selectAuthUser = (s: RootStateLike) => selectAuth(s).user;
export const selectAuthStatus = (s: RootStateLike) => selectAuth(s).status;
export const selectAuthError = (s: RootStateLike) => selectAuth(s).error;

export const selectIsAuthenticated = (s: RootStateLike) =>
  Boolean(selectAccessToken(s));