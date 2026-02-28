// src/features/home/ui/recommendation/RecommendationSection.tsx
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useRecommendedBooksInfinite } from "@/features/books/hooks/useRecommendedBooksInfinite"
import { BookCard } from "@/features/books/ui"
import { RecommendationSkeleton } from "@/features/books/ui/RecommendationSkeleton"
import { Section } from "@/shared/components/layout"
import { RecommendationError } from "@/features/books/ui/RecommendationError"

export const RecommendationSection: React.FC = () => {
  const q = useRecommendedBooksInfinite({ by: "rating", limit: 10 })

  if (q.isLoading) return <RecommendationSkeleton />
  if (q.isError)     return <RecommendationError />

  const books = q.data?.pages.flatMap((p) => p.books) ?? []

  return (
    <Section id="recommendation" title="Recommendation">
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