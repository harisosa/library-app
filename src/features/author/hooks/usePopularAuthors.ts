'use client'

import { useQuery } from '@tanstack/react-query'
import { authorsQueryKeys } from '../queryKeys'
import { getPopularAuthors } from '@/features/author/api'

export const usePopularAuthors = (limit: number = 10) => {
  return useQuery({
    queryKey: authorsQueryKeys.popularWithLimit(limit),
    queryFn: () => getPopularAuthors(limit),

    staleTime: 1000 * 60 * 5,
  })
}