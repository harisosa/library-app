"use client";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export const BookUpsertFormSkeleton = () => {
  return (
    <div className="w-full md:w-150 md:mx-auto">
        {/* Title */}
        <Skeleton className="h-6 w-40" />

        <Separator />

        {/* Title input */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-11 w-full rounded-md" />
        </div>

        {/* Author */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-11 w-full rounded-md" />
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-11 w-full rounded-md" />
        </div>

        {/* Number of Page */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-11 w-full rounded-md" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-28 w-full rounded-md" />
        </div>

        {/* Cover */}
        <div className="space-y-3">
          <Skeleton className="h-4 w-24" />
          <div className="rounded-xl border border-dashed p-4 flex flex-col items-center gap-3">
            <Skeleton className="h-[140px] w-[110px] rounded-md" />
            <div className="flex gap-2">
              <Skeleton className="h-9 w-28 rounded-full" />
              <Skeleton className="h-9 w-28 rounded-full" />
            </div>
            <Skeleton className="h-3 w-40" />
          </div>
        </div>

        {/* Save button */}
        <Skeleton className="h-12 w-full rounded-full" />
    </div>
  );
};