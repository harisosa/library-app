"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type Props = {
  title?: string;
  description?: string;
  action?: "login" | "home" | "retry";
  onRetry?: () => void;
};

export const AdminGateError: React.FC<Props> = ({
  title = "You don’t have access to this page",
  description = "This area is restricted to administrators. If you think this is a mistake, try signing in again.",
  action = "login",
  onRetry,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleAction = () => {
    if (action === "retry") {
      onRetry?.();
      return;
    }

    if (action === "home") {
      router.replace("/");
      return;
    }

    const next = pathname || "/";
    router.replace(`/login?next=${encodeURIComponent(next)}`);
  };

  const actionLabel =
    action === "home" ? "Back to Home" : action === "retry" ? "Try Again" : "Sign in again";

  return (
    <div className="min-h-dvh flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border p-6 shadow-sm">
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <div className="mt-6 flex gap-3">
          <Button onClick={handleAction} className="flex-1">
            {actionLabel}
          </Button>
          <Button
            variant="outline"
            onClick={() => router.replace("/")}
          >
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};