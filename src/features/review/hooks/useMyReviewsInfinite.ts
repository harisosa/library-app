'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { getMyReviews } from '@/features/review/api'
import { reviewsQueryKeys } from '@/features/review/queryKeys'

type UseMyReviewsInfiniteArgs = {
  q: string
  limit: number
}

export const useMyReviewsInfinite = ({ q, limit }: UseMyReviewsInfiniteArgs) => {
  return useInfiniteQuery({
    queryKey: reviewsQueryKeys.myInfinite({ q, limit }),
    initialPageParam: 1,

    queryFn: ({ pageParam }) =>
      getMyReviews({
        q: q.trim() ? q.trim() : undefined,
        page: pageParam,
        limit,
      }),

    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.pagination
      if (page >= totalPages) return undefined
      return page + 1
    },

    staleTime: 30_000,
  })
}