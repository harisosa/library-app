
import { api } from "@/lib/http";
import type { LoginPayload, LoginResult, RegisterPayload } from "../types";

export const login = (payload: LoginPayload) => {
  return api<LoginResult>({
    method: "POST",
    url: "/auth/login",
    data: payload,
  });
};


export const register = async (payload: RegisterPayload) => {
  await api({
    url: "/auth/register",
    method: "POST",
    data: payload,
  });
};