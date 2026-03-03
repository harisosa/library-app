"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type ChangeEvent } from "react";

import { InputWithLabel } from "@/components/ui/input-label";
import { PasswordInput } from "@/components/ui/password-input";
import { LoadingButton } from "@/components/ui/loading-button";

import { useLogin } from "@/features/auth/hooks/useLogin";

type LoginFormState = { email: string; password: string };
type LoginErrors = Partial<Record<keyof LoginFormState, string>>;

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const { mutate, isPending } = useLogin();

  const [form, setForm] = useState<LoginFormState>({ email: "", password: "" });
  const [errors, setErrors] = useState<LoginErrors>({});

  const handleChange =
    (field: keyof LoginFormState) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = () => {
    const next: LoginErrors = {};
    if (!form.email.trim()) next.email = "Email is required";
    if (!form.password) next.password = "Password is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!validate()) return;

    mutate({ email: form.email.trim(), password: form.password });
  };

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <fieldset className="space-y-4" disabled={isPending} aria-busy={isPending}>
        <InputWithLabel
          label="Email"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange("email")}
          error={errors.email}
        />

        <PasswordInput
          label="Password"
          id="password"
          name="password"
          autoComplete="current-password"
          value={form.password}
          onChange={handleChange("password")}
          error={errors.password}
        />

        <LoadingButton
          type="submit"
          className="h-12 w-full rounded-full text-md font-bold"
          loading={isPending}
          loadingText="Logging in..."
        >
          Login
        </LoadingButton>
      </fieldset>

      <p className="text-center text-md font-semibold text-neutral-950">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-md font-bold text-[#1C65DA] hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
};