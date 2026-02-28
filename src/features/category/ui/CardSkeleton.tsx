"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

type CardsSkeletonProps = {
  count?: number
}

export const CardsSkeleton: React.FC<CardsSkeletonProps> = ({ count = 6 }) => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className="w-50 shrink-0 rounded-2xl p-4">
          <Skeleton className="h-19 w-full rounded-xl" />
          <Skeleton className="mt-3 h-4 w-24" />
        </Card>
      ))}
    </div>
  )
}