import { AuthGuard } from "@/features/auth/components";
import { Navbar } from "@/features/layout/components/navbar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthGuard requireAdmin>
      <Navbar />
      <main className="min-h-[85vh] pt-32">
      {children}
      </main>

    </AuthGuard>
  );
};

export default AdminLayout;