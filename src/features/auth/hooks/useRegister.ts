"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import type { RegisterPayload } from "../types";
import { register } from "@/features/auth/api";

type UseRegisterOptions = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
};

export const useRegister = (options?: UseRegisterOptions) => {
  return useMutation<void, Error, RegisterPayload>({
    mutationFn: register,

    onSuccess: () => {
      toast.success("Account created successfully");
      options?.onSuccess?.();
    },

    onError: (error) => {
      toast.error(error.message || "Registration failed");
      options?.onError?.(error);
    },
  });
};