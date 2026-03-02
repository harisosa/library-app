import { api } from "@/lib/http"
import type { BookDetail, RecommendBooksResponse, RecommendMode } from "../types"

export type GetRecommendedBooksParams = {
  by?: RecommendMode
  page?: number
  limit?: number
}

export const getRecommendedBooks = async (
  params: GetRecommendedBooksParams,
): Promise<RecommendBooksResponse> => {
  const by = params.by ?? "rating"
  const page = params.page ?? 1
  const limit = params.limit ?? 10

  const qs = new URLSearchParams({
    by: String(by),
    page: String(page),
    limit: String(limit),
  })

  return api<RecommendBooksResponse>({
    method: "GET",
    url: `/books/recommend?${qs.toString()}`,
  })
}


export const getBookDetail = async (bookId: number): Promise<BookDetail> => {
  return await api<BookDetail>({
    method: "GET",
    url: `/books/${bookId}`,
  })

}