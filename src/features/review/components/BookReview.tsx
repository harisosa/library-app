"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useBookReviewsInfinite } from "../hooks/useBookReviewsInfinite";
import type { Review } from "../types";
import { ReviewError } from "@/features/review/ui/error/ReviewError";
import { BookReviewsSkeleton } from "@/features/review/ui/skeleton";
import { ReviewCard } from "@/features/review/ui/ReviewCard";
import { Section } from "@/shared/components";
import { Star } from "lucide-react";
import { useBookDetail } from "@/features/books/hooks/useBookDetail";

type Props = {
  bookId: number;
};

export const BookReviews: React.FC<Props> = ({
  bookId,
}) => {
  const { data: book } = useBookDetail(bookId);
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useBookReviewsInfinite({ bookId, limit: 10 });

  if (isLoading) return <BookReviewsSkeleton />;

  if (isError) return <ReviewError error={error} refetch={refetch} />

  const pages = data?.pages ?? [];
  const reviews: Review[] = pages.flatMap((p) => p.reviews);
  const totalReviews = pages[0]?.pagination.total ?? 0;
  const averageRating = book?.rating ?? 0;

  return (
    <Section id="review">
      <div>
        <div className="flex flex-col gap-3">
          <h2 className="text-display-lg font-bold tracking-tight">Review</h2>

          <div className="flex items-center gap-2 text-lg font-bold">
            <Star className="h-4 w-4 fill-current text-[#FFAB0D]" />
            <span className="font-bold">
              {typeof averageRating === "number" ? averageRating.toFixed(1) : "—"}
            </span>
            <span className="text-neutral-950">({totalReviews} Ulasan)</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {reviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            className="min-w-44 rounded-full"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        </div>
      </div>

    </Section>
  );
};