"use client";

import { useMutation } from "@tanstack/react-query";

import type { LoginPayload, LoginResult } from "../types";
import { login } from "@/features/auth/api";

export const useLogin = () => {
  return useMutation<LoginResult, Error, LoginPayload>({
    mutationFn: login,
  });
};