"use client";

import { AuthGuard } from "@/features/auth/components";
import React from "react";

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <AuthGuard>
      {/* Navbar / AppShell taruh di sini nanti */}
      {children}
    </AuthGuard>
  );
};

export default MainLayout;