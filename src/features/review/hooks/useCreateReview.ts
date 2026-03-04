'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import type { CreateReviewPayload } from '../types'
import { createReview } from '@/features/review/api'
import { reviewsQueryKeys } from '@/features/review/queryKeys'
import { booksQueryKeys } from '@/features/books/queryKeys'

export const useCreateReview = () => {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: (payload: CreateReviewPayload) => createReview(payload),

    onSuccess: (_, vars) => {
      toast.success('Review submitted!')

      qc.invalidateQueries({ queryKey: reviewsQueryKeys.byBook(vars.bookId) })
      qc.invalidateQueries({ queryKey: reviewsQueryKeys.my() })
      qc.invalidateQueries({ queryKey: booksQueryKeys.all})
    },

    onError: (error: unknown) => {
      toast.error('Failed to submit review')
      console.error(error)
    },
  })
}