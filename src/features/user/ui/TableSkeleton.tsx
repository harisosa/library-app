import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

export const TableSkeleton: React.FC = () => {
  return (
    <div className="rounded-2xl border bg-background overflow-hidden">
      <div className="p-4 space-y-3">
        <Skeleton className="h-10 w-full" />
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-full" />
        ))}
      </div>

      <div className="border-t px-4 py-3 flex items-center justify-between">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-9 w-40" />
      </div>
    </div>
  )
}