
import { api } from "@/lib/http/api";
import type { LoginPayload, LoginResult } from "../types";

export const login = (payload: LoginPayload) =>
  api<LoginResult>({
    url: "/api/auth/login",
    method: "POST",
    data: payload,
  });