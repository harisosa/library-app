import * as React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const BookReviewsSkeleton: React.FC = () => {
  return (
    <div className="w-full">
      <Skeleton className="h-8 w-40" />
      <div className="mt-2 flex items-center gap-2">
        <Skeleton className="h-4 w-4 rounded" />
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-4 w-24" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl bg-card p-6 shadow-sm">
            <div className="flex gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="flex-1">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="mt-2 h-4 w-40" />
              </div>
            </div>
            <div className="mt-4 flex gap-1">
              {Array.from({ length: 5 }).map((__, j) => (
                <Skeleton key={j} className="h-4 w-4 rounded" />
              ))}
            </div>
            <Skeleton className="mt-4 h-4 w-full" />
            <Skeleton className="mt-2 h-4 w-[90%]" />
            <Skeleton className="mt-2 h-4 w-[70%]" />
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Skeleton className="h-10 w-44 rounded-full" />
      </div>
    </div>
  );
};