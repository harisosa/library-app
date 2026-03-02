"use client"

import * as React from "react"

import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { Section } from "@/shared/components"

export const BookDetailSkeleton: React.FC = () => {
  return (
    <Section id='book-detail-skeleton'>
      {/* Breadcrumb */}
      <div className="mb-4 flex items-center gap-2">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-3" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-3" />
        <Skeleton className="h-4 w-40" />
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
        {/* Cover */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-65 sm:w-75 lg:w-90">
            <div className="relative aspect-3/4 overflow-hidden rounded-md border bg-muted">
              <Skeleton className="absolute inset-0" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full max-w-180 lg:max-w-none">
          {/* Category badge */}
          <Skeleton className="h-6 w-36 rounded-md" />

          {/* Title + author */}
          <div className="mt-3 space-y-2">
            <Skeleton className="h-8 w-[85%]" />
            <Skeleton className="h-4 w-44" />
          </div>

          {/* Rating row */}
          <div className="mt-3 flex items-center gap-2">
            <Skeleton className="h-4 w-4 rounded-sm" />
            <Skeleton className="h-4 w-10" />
          </div>

          {/* Stats */}
          <div className="mt-5">
            <div className="grid grid-cols-3">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="relative px-3 py-2">
                  {idx !== 0 ? (
                    <Separator
                      orientation="vertical"
                      className="absolute left-0 top-1/2 h-10 -translate-y-1/2"
                    />
                  ) : null}

                  <Skeleton className="h-5 w-12" />
                  <Skeleton className="mt-2 h-3 w-16" />
                </div>
              ))}
            </div>
            <Separator className="mt-4" />
          </div>

          {/* Description */}
          <div className="mt-6">
            <Skeleton className="h-4 w-24" />
            <div className="mt-3 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[95%]" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[84%]" />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Skeleton className="h-10 w-32 rounded-full" />
            <Skeleton className="h-10 w-36 rounded-full" />
          </div>
        </div>
      </div>
    </Section>
  )
}