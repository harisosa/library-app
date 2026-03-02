import type { BookReviewsData, GetBookReviewsParams } from "../types";
import { api } from "@/lib/http";

export const getBookReviews = async (params: GetBookReviewsParams) => {
  const { bookId, page, limit } = params;

  return api<BookReviewsData>({
    method: "GET",
    url: `/reviews/book/${bookId}`,
    params: { page, limit },
  });
};