'use client'

import * as React from 'react'

const SkeletonCard: React.FC = () => {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <div className="h-3 w-40 animate-pulse rounded bg-neutral-100" />
      <div className="mt-4 flex gap-4">
        <div className="h-[74px] w-[56px] animate-pulse rounded-lg bg-neutral-100" />
        <div className="flex-1 space-y-2">
          <div className="h-6 w-24 animate-pulse rounded-full bg-neutral-100" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-neutral-100" />
          <div className="h-3 w-1/2 animate-pulse rounded bg-neutral-100" />
        </div>
      </div>
      <div className="my-4 h-px w-full bg-neutral-100" />
      <div className="h-4 w-28 animate-pulse rounded bg-neutral-100" />
      <div className="mt-3 space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-neutral-100" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-neutral-100" />
      </div>
    </div>
  )
}

export const MyReviewsSkeleton: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="h-10 max-w-130 animate-pulse rounded-full bg-neutral-100" />
      <div className="space-y-6">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  )
}