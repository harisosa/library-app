import * as React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const LoanCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-2xl border bg-background px-5 py-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-14 rounded" />
          <Skeleton className="h-5 w-16 rounded-md" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-16 rounded" />
          <Skeleton className="h-5 w-28 rounded-md" />
        </div>
      </div>

      <div className="my-4 h-px w-full bg-border" />

      <div className="flex items-center justify-between gap-6">
        <div className="flex min-w-0 items-center gap-4">
          <Skeleton className="h-[92px] w-[72px] rounded-lg" />
          <div className="min-w-0">
            <Skeleton className="mb-2 h-5 w-20 rounded-md" />
            <Skeleton className="h-5 w-56 max-w-full rounded" />
            <Skeleton className="mt-2 h-4 w-40 rounded" />
            <Skeleton className="mt-3 h-4 w-64 max-w-full rounded" />
          </div>
        </div>

        <Skeleton className="h-10 w-32 rounded-full" />
      </div>
    </div>
  );
};

export const BorrowedListSkeleton: React.FC = () => {
  return (
    <>
      <LoanCardSkeleton />
      <LoanCardSkeleton />
      <LoanCardSkeleton />
    </>
  );
};