"use client"

import * as React from "react"
import { BookCover } from "@/features/books/ui/BookCover"
import { BookDetailBreadcrumb, BookDetailHeader, BookDetailDescription, BookDetailActions, BookDetailStats } from "@/features/books/ui/book-detail"
import { Section } from "@/shared/components"

export type BookDetailModel = {
  title: string
  authorName: string
  categoryName: string
  rating: number
  pages: number
  ratingCount: number
  reviewsCount: number
  description: string
  coverImage?: string | null
}

type BookDetailProps = {
  data: BookDetailModel
  onAddToCart?: () => void
  onBorrow?: () => void
  disabledBorrow?: boolean
}

export const BookDetail: React.FC<BookDetailProps> = ({
  data,
  onAddToCart,
  onBorrow,
  disabledBorrow,
}) => {
  return (
    <Section id='book-detail'>
      <BookDetailBreadcrumb title={data.title} />

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-9 lg:h-124.5">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-9">
          <div className="flex justify-center lg:justify-start">
            <div className="w-84.25 h-124.5 p-2 bg-muted rounded-xl">
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <BookCover
                  src={data.coverImage}
                  alt={data.title}
                  fit="contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-180 lg:max-w-none py-4.5">
          <BookDetailHeader
            categoryName={data.categoryName}
            title={data.title}
            authorName={data.authorName}
            rating={data.rating}
          />

          <BookDetailStats
            items={[
              { value: data.pages, label: "Page" },
              { value: data.ratingCount, label: "Rating" },
              { value: data.reviewsCount, label: "Reviews" },
            ]}
          />

          <BookDetailDescription description={data.description} />

          <BookDetailActions
            onAddToCart={onAddToCart}
            onBorrow={onBorrow}
            disabledBorrow={disabledBorrow}
          />
        </div>
      </div>
    </Section>
  )
}