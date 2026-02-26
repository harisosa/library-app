export type AuthUser = {
  id: string;
  username: string;
  name?: string;
};

export type LoginPayload = {
  username: string;
  password: string;
};

export type LoginResult = {
  accessToken: string;
  user: AuthUser;
};

export type AuthStatus =
  | "idle"
  | "loading"
  | "authenticated"
  | "unauthenticated";