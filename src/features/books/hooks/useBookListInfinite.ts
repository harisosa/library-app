import { useInfiniteQuery } from "@tanstack/react-query"

import { booksQueryKeys } from "../queryKeys"
import { BooksListFilters } from "@/features/books/types"
import { getBooks } from "@/features/books/api"

const DEFAULT_LIMIT = 8

export const useBookListInfinite = (filters: BooksListFilters) => {
  const limit = filters.limit ?? DEFAULT_LIMIT

  return useInfiniteQuery({
    queryKey: booksQueryKeys.listInfinite({ ...filters, limit }),
    queryFn: ({ pageParam }) =>
      getBooks({
        q: filters.q,
        categoryId: filters.categoryId,
        authorId: filters.authorId,
        minRating: filters.minRating,
        page: pageParam,
        limit,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.pagination
      return page < totalPages ? page + 1 : undefined
    },
  })
}