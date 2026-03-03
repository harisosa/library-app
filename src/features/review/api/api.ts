import type { BookReviewsData, CreateReviewPayload, GetBookReviewsParams, GetMyReviewsParams, MyReviewsData } from "../types";
import { api } from "@/lib/http";

export const getBookReviews = async (params: GetBookReviewsParams) => {
  const { bookId, page, limit } = params;

  return api<BookReviewsData>({
    method: "GET",
    url: `/reviews/book/${bookId}`,
    params: { page, limit },
  });
};


export const createReview = (payload: CreateReviewPayload) => {
  return api<void>({
    method: 'POST',
    url: '/reviews',
    data: payload,
  })
}



export const getMyReviews = (params: GetMyReviewsParams) => {
  return api<MyReviewsData>({
    method: 'GET',
    url: '/me/reviews',
    params,
  })
}