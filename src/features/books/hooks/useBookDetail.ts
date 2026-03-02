import { useQuery } from "@tanstack/react-query"
import { booksQueryKeys } from "../queryKeys"
import { getBookDetail } from "@/features/books/api"

export const useBookDetail = (bookId: number) => {
  return useQuery({
    queryKey: booksQueryKeys.detail(bookId),
    queryFn: () => getBookDetail(bookId),
    enabled: Number.isFinite(bookId) && bookId > 0,
    staleTime: 60_000,
  })
}