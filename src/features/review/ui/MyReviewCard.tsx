'use client'

import React from 'react'
import Image from 'next/image'
import type { MyReview } from '@/features/review/types'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'
import { formatDateTime } from '@/lib/utils'

type MyReviewCardProps = {
  review: MyReview
}

const StarsRow: React.FC<{ value: number }> = ({ value }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, idx) => {
        const v = idx + 1
        const active = v <= value
        return (
          <Star
            key={v}
            className={[
              'h-4 w-4',
              active ? 'fill-amber-400 text-amber-400' : 'text-neutral-300',
            ].join(' ')}
          />
        )
      })}
    </div>
  )
}

export const MyReviewCard: React.FC<MyReviewCardProps> = ({ review }) => {
  const book = review.book
  const dateLabel = formatDateTime(review.createdAt)

  return (
    <div className="rounded-2xl border bg-white shadow-sm">
      {/* date */}
      <div className="px-6 pt-4 text-xs text-neutral-500">{dateLabel}</div>

      <div className="px-6 pb-5 pt-3">
        {/* header row */}
        <div className="flex gap-4">
          <div className="relative h-18.5 w-14 overflow-hidden rounded-lg bg-neutral-100">
            {book?.coverImage ? (
              <Image
                src={book.coverImage}
                alt={book.title ?? 'Book cover'}
                fill
                className="object-cover"
                sizes="56px"
              />
            ) : null}
          </div>

          <div className="min-w-0 flex-1">
            <Badge variant="secondary" className="h-6 rounded-full px-3 text-xs">
              {book?.category?.name ?? 'Category'}
            </Badge>

            <div className="mt-2 truncate text-sm font-semibold text-neutral-900">
              {book?.title ?? 'Book Name'}
            </div>

            <div className="mt-1 truncate text-xs text-neutral-500">
              {book?.author?.name ?? 'Author name'}
            </div>
          </div>
        </div>

        <div className="my-4 h-px w-full bg-neutral-100" />

        <StarsRow value={review.star} />

        <p className="mt-3 text-sm leading-6 text-neutral-700">{review.comment}</p>
      </div>
    </div>
  )
}