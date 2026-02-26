"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { login } from "@/features/auth/api";
import type { LoginPayload, LoginResult } from "../types";
import { loginFailure, loginStart, loginSuccess } from "@/features/auth/store/actions";
import { useAppDispatch } from "@/store/hooks";

type UseLoginOptions = {
  onSuccess?: (result: LoginResult) => void;
  onError?: (error: Error) => void;
};

export const useLogin = (options?: UseLoginOptions) => {
  const dispatch = useAppDispatch();

  return useMutation<LoginResult, Error, LoginPayload>({
    mutationFn: login,

    onMutate: () => {
      dispatch(loginStart());
    },

    onSuccess: (result) => {
      dispatch(loginSuccess(result));
      toast.success("Logged in");
      options?.onSuccess?.(result);
    },

    onError: (error) => {
      dispatch(loginFailure(error.message));
      toast.error(error.message || "Login failed");
      options?.onError?.(error);
    },
  });
};