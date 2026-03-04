"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useRecommendedBooksInfinite } from "@/features/books/hooks"
import { BookCard } from "@/features/books/ui"
import { Section } from "@/shared/components/layout"
import { RecommendationError } from "@/features/books/ui/recommendation"
import { RecommendationSkeleton } from "@/features/books/ui/skeleton"

type BookCarouselProps = {
  id: string;
  by: 'popular' | 'rating';
  limit: number;
  title?: string;
  isLoadMore?: boolean;
  containerClassname?: string;
}


export const BookCarousel: React.FC<BookCarouselProps> = ({ id, by, limit, title, isLoadMore = true, containerClassname }) => {
  const q = useRecommendedBooksInfinite({ by: by, limit: limit })

  if (q.isLoading) return <RecommendationSkeleton />
  if (q.isError) return <RecommendationError />

  const books = q.data?.pages.flatMap((p) => p.books) ?? []

  return (
    <Section id={id} title={title} contentClassName={containerClassname} >
      <div
        className={cn(
          "grid w-full",
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

      {isLoadMore && (

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
      )}

    </Section>
  )
}