"use client";

import * as React from "react";

export const ProfileOverviewSkeleton: React.FC = () => {
  return (
    <div className="mt-6">
      <div className="h-8 w-40 rounded-lg bg-muted/60 animate-pulse" />

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="h-16 w-16 rounded-full bg-muted/60 animate-pulse" />

          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="h-4 w-20 rounded bg-muted/60 animate-pulse" />
              <div className="h-4 w-28 rounded bg-muted/60 animate-pulse" />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="h-4 w-20 rounded bg-muted/60 animate-pulse" />
              <div className="h-4 w-44 rounded bg-muted/60 animate-pulse" />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="h-4 w-32 rounded bg-muted/60 animate-pulse" />
              <div className="h-4 w-32 rounded bg-muted/60 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="h-12 w-full rounded-full bg-muted/60 animate-pulse" />
        </div>
      </div>
    </div>
  );
};