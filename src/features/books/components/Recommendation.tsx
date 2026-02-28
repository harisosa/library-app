// src/features/home/ui/recommendation/RecommendationSection.tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useRecommendedBooksInfinite } from "@/features/books/hooks/useRecommendedBooksInfinite"
import { BookCard } from "@/features/books/ui"
import { RecommendationSkeleton } from "@/features/books/ui/RecommendationSkeleton"
import { Section } from "@/shared/components/layout"


type Props = {
  className?: string
  title?: string
}

export const RecommendationSection: React.FC<Props> = ({
  className,
  title = "Recommendation",
}) => {
  const q = useRecommendedBooksInfinite({ by: "rating", limit: 10 })

  if (q.isLoading) return <RecommendationSkeleton className={className} />
  if (q.isError) {
    return (
      <div className={cn("space-y-3", className)}>
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <div className="text-sm text-destructive">Failed to load recommendations.</div>
      </div>
    )
  }

  const books = q.data?.pages.flatMap((p) => p.books) ?? []

  return (
    <Section className={className}>
      <h2 className="mb-10 text-display-xs lg:text-display-lg font-bold text-neutral-950">{title}</h2>

      <div
        className={cn(
          "grid justify-between",
          "grid-cols-2 gap-x-4 gap-y-6",
          "md:grid-cols-3",
          "lg:grid-cols-4",
          "xl:grid-cols-5",
        )}
      >
        {books.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button
          type="button"
          variant="outline"
          className="h-10 rounded-full px-10"
          onClick={() => q.fetchNextPage()}
          disabled={!q.hasNextPage || q.isFetchingNextPage}
        >
          {q.isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      </div>
    </Section>
  )
}