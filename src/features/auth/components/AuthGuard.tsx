"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { selectAccessToken, selectAuthStatus } from "@/features/auth/store";

type Props = {
  children: React.ReactNode;
};

export const AuthGuard: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const token = useAppSelector(selectAccessToken);
  const status = useAppSelector(selectAuthStatus);

  React.useEffect(() => {
    
    if (!token && status !== "loading") {
      const next = pathname || "/";
      router.replace(`/login?next=${encodeURIComponent(next)}`);
    }
  }, [token, status, router, pathname]);

  if (!token) return null;

  return <>{children}</>;
};