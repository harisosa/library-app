import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

export const AdminBooksListSkeleton: React.FC = () => {
  return (
    <div className="space-y-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 px-4 py-4 md:px-6 md:py-5"
        >
          <div className="flex items-center gap-4">
            <Skeleton className="h-30 w-21 rounded-xl" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-6 w-40 rounded-full" />
              <Skeleton className="h-6 w-72" />
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="hidden md:flex gap-3">
              <Skeleton className="h-10 w-24 rounded-full" />
              <Skeleton className="h-10 w-20 rounded-full" />
              <Skeleton className="h-10 w-24 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}