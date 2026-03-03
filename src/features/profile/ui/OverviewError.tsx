"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  onRetry: () => void;
};

export const ProfileOverviewError: React.FC<Props> = ({ onRetry }) => {
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-semibold">Profile</h1>

      <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-muted/60" />

          <div className="flex-1">
            <p className="text-sm font-medium">Gagal memuat profile</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Coba refresh atau tekan tombol retry.
            </p>

            <div className="mt-4 flex gap-2">
              <Button onClick={onRetry}>Retry</Button>
              <Button variant="outline" onClick={() => window.location.reload()}>
                Refresh
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};