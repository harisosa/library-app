
"use client"

import { useInfiniteQuery } from "@tanstack/react-query"
import { getRecommendedBooks } from "../api"
import { booksQueryKeys } from "../queryKeys"
import type { RecommendMode } from "../types"

type Params = {
  by?: RecommendMode
  limit?: number
}

export const useRecommendedBooksInfinite = (params?: Params) => {
  const by = params?.by ?? "rating"
  const limit = params?.limit ?? 10

  return useInfiniteQuery({
    queryKey: booksQueryKeys.recommended({ by: String(by), limit }),
    initialPageParam: 1,
    queryFn: async ({ pageParam }) => {
      const res = await getRecommendedBooks({ by, limit, page: pageParam })
      return res
    },
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.pagination
      return page < totalPages ? page + 1 : undefined
    },
    staleTime: 60_000,
  })
}