'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useMyReviewsInfinite } from '@/features/review/hooks/useMyReviewsInfinite'
import type { MyReview } from '@/features/review/types'
import { MyReviewsSkeleton } from '@/features/review/ui/skeleton/MyReveiwSkeleton'
import { MyReviewsError } from '@/features/review/ui/error/MyReviewError'
import { SearchInput } from '@/components/ui/search-input'
import { MyReviewsList } from '@/features/review/ui/MyReviewList'

const useDebouncedValue = <T,>(value: T, delayMs: number) => {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const t = window.setTimeout(() => setDebounced(value), delayMs)
    return () => window.clearTimeout(t)
  }, [value, delayMs])

  return debounced
}

export const MyReviews: React.FC = () => {
  const [qInput, setQInput] = useState('')
  const q = useDebouncedValue(qInput, 350)

  const reviewsQ = useMyReviewsInfinite({ q, limit: 20 })

  if (reviewsQ.isLoading) return <MyReviewsSkeleton />
  if (reviewsQ.isError) return <MyReviewsError />

  const reviews: MyReview[] = reviewsQ.data?.pages.flatMap((p) => p.reviews) ?? [];

  return (
    <div className="space-y-4">
      <SearchInput value={qInput} onChange={(e) => setQInput(e.target.value)} />

      <MyReviewsList reviews={reviews} />

      {reviewsQ.hasNextPage ? (
        <div className="flex justify-center pt-2">
          <Button
            onClick={() => reviewsQ.fetchNextPage()}
            disabled={reviewsQ.isFetchingNextPage}
            className="h-10 rounded-full px-8"
          >
            {reviewsQ.isFetchingNextPage ? 'Loading...' : 'Load More'}
          </Button>
        </div>
      ) : null}
    </div>
  )
}