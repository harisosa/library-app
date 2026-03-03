"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { login } from "@/features/auth/api";
import type { LoginPayload, LoginResult } from "../types";
import { loginFailure, loginStart, loginSuccess } from "@/features/auth/store/actions";
import { useAppDispatch } from "@/store/hooks";
import { useRouter } from "next/navigation";

type UseLoginOptions = {
  onSuccess?: (result: LoginResult) => void;
  onError?: (error: Error) => void;
};

export const useLogin = (options?: UseLoginOptions) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return useMutation<LoginResult, Error, LoginPayload>({
    mutationFn: login,

    onMutate: () => {
      dispatch(loginStart());
    },

    onSuccess: (result) => {
      dispatch(loginSuccess(result));
      
      toast.success("Logged in");

      if(result.user.role === "ADMIN") router.replace('/admin')
      else router.replace('/')
      options?.onSuccess?.(result);
    },

    onError: (error) => {
      dispatch(loginFailure(error.message));
      toast.error(error.message || "Login failed");
      options?.onError?.(error);
    },
  });
};