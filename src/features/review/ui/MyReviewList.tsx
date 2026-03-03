'use client'

import React from 'react'
import type { MyReview } from '@/features/review/types'
import { MyReviewCard } from './MyReviewCard'

type MyReviewsListProps = {
  reviews: MyReview[]
}

export const MyReviewsList: React.FC<MyReviewsListProps> = ({ reviews }) => {
  if (reviews.length === 0) {
    return (
      <div className="rounded-2xl border bg-white p-6 text-sm text-neutral-500">
        No reviews found.
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {reviews.map((r) => (
        <MyReviewCard key={r.id} review={r} />
      ))}
    </div>
  )
}