export type AuthRole = "ADMIN" | "USER";

export type AuthUser = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  profilePhoto: string | null;
  role: AuthRole;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResult = {
  token: string;
  user: AuthUser;
};

export type RegisterPayload ={
  name: string;
  email: string;
  phone: string;
  password: string;
}

export type RegisterFormPayload = RegisterPayload & {
  confirmPassword:string;
}

export type AuthStatus =
  | "idle"
  | "loading"
  | "authenticated"
  | "unauthenticated";

export type AuthState = {
  accessToken: string | null;
  user: AuthUser | null;
  status: AuthStatus;
  error: string | null;
};

