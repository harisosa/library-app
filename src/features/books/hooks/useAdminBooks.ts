"use client"

import { useQuery } from "@tanstack/react-query"

import { BooksListFilters } from "@/features/books/types"
import { getAdminBooks } from "@/features/books/api"
import { booksQueryKeys } from "@/features/books/queryKeys"

export const useAdminBooks = (params: BooksListFilters) => {
  return useQuery({
    queryKey: booksQueryKeys.adminList(params),
    queryFn: () => getAdminBooks(params),
  })
}