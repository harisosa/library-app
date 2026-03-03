"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { selectAccessToken, selectAuthStatus } from "@/features/auth/store";
import { useMe } from "@/features/profile/hooks/useMe";
import { AdminGateError } from "@/features/auth/ui/AdminError";

type Props = {
  children: React.ReactNode;
  requireAdmin?: boolean;
};

export const AuthGuard: React.FC<Props> = ({ children, requireAdmin }) => {
  const router = useRouter();
  const pathname = usePathname();

  const token = useAppSelector(selectAccessToken);
  const status = useAppSelector(selectAuthStatus);

  const {data: me, isSuccess, isLoading, isError} = useMe();
  const user = me?.profile

  useEffect(() => {
    if (!token && status !== "loading") {
      const next = pathname || "/";
      router.replace(`/login?next=${encodeURIComponent(next)}`);
    }
  }, [token, status, router, pathname]);

  useEffect(() => {
    if (!requireAdmin) return;
    if (!token || status === "loading") return;

    if (isSuccess) {
      if (user?.role !== "ADMIN") router.replace("/");
    }
  }, [requireAdmin, token, status, isSuccess, user, router]);

  if (!token) return null;

  if (requireAdmin) {
    if (isLoading) return null;
    if (isError) return       
    <AdminGateError
        title="Admin only"
        description="This page is only available for administrators."
        action="home"
      />;
    if (user?.role !== "ADMIN") return null;
  }

  return <>{children}</>;
};