"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type ChangeEvent } from "react";

import { InputWithLabel } from "@/components/ui/input-label";
import { PasswordInput } from "@/components/ui/password-input";
import { LoadingButton } from "@/components/ui/loading-button";

import { useRegister } from "@/features/auth/hooks/useRegister";
import type { RegisterFormPayload } from "@/features/auth/types";

type RegisterErrors = Partial<Record<keyof RegisterFormPayload, string>>;

export const RegisterForm: React.FC = () => {
  const router = useRouter();
  const { mutate, isPending } = useRegister({
    onSuccess: () => router.replace("/login"),
  });

  const [form, setForm] = useState<RegisterFormPayload>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<RegisterErrors>({});

  const handleChange =
    (field: keyof RegisterFormPayload) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;
      if (field === "phone") value = value.replace(/\D/g, "");

      setForm((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = () => {
    const next: RegisterErrors = {};

    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    if (!form.phone.trim()) next.phone = "Phone number is required";
    if (form.password.length < 8)
      next.password = "Password must be at least 8 characters";
    if (form.confirmPassword !== form.password)
      next.confirmPassword = "Passwords do not match";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!validate()) return;

    mutate(form);
  };

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <fieldset className="space-y-4" disabled={isPending} aria-busy={isPending}>
        <InputWithLabel
          label="Name"
          id="name"
          name="name"
          autoComplete="name"
          value={form.name}
          onChange={handleChange("name")}
          error={errors.name}
        />

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

        <InputWithLabel
          label="Phone Number"
          id="phone"
          name="phone"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange("phone")}
          error={errors.phone}
        />

        <PasswordInput
          label="Password"
          id="password"
          name="password"
          autoComplete="new-password"
          value={form.password}
          onChange={handleChange("password")}
          error={errors.password}
        />

        <PasswordInput
          label="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          autoComplete="new-password"
          value={form.confirmPassword}
          onChange={handleChange("confirmPassword")}
          error={errors.confirmPassword}
        />

        <LoadingButton
          type="submit"
          className="h-12 w-full rounded-full text-base"
          loading={isPending}
          loadingText="Creating..."
        >
          Create Account
        </LoadingButton>
      </fieldset>

      <p className="text-center text-md font-semibold text-neutral-950">
        Already have an account?{" "}
        <Link href="/login" className="text-md font-bold text-[#1C65DA] hover:underline">
          Log In
        </Link>
      </p>
    </form>
  );
};