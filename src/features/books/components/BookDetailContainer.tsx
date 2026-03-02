"use client"

import * as React from "react"
import { useBookDetail } from "@/features/books/hooks/useBookDetail"
import { BookDetail } from "@/features/books/ui/BookDetail"
import { BookDetailSkeleton } from "@/features/books/ui/skeleton"

type Props = {
  bookId: number
}

export const BookDetailContainer: React.FC<Props> = ({ bookId }) => {
  const { data, isLoading, isError } = useBookDetail(bookId)

  if (isLoading) {
    return <BookDetailSkeleton/>
  }

  if (isError || !data) {
    return (
      <div className="text-sm text-destructive">
        Failed to load book detail.
      </div>
    )
  }

  const model = {
    title: data.title,
    authorName: data.author?.name ?? "-",
    categoryName: data.category?.name ?? "-",
    rating: data.rating ?? 0,
    pages: data.totalCopies ?? 0,
    ratingCount: data.reviewCount ?? 0,
    reviewsCount: data.reviews?.length ?? 0,
    description: data.description ?? "",
    coverImage: data.coverImage,
  }

  return (
    <BookDetail
      data={model}
      onAddToCart={() => {
        console.log("add-to-cart", bookId)
      }}
      onBorrow={() => {
        console.log("borrow", bookId)
      }}
      disabledBorrow={data.availableCopies === 0}
    />
  )
}