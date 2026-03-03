import { Book } from "@/features/books/types";
import { Pagination } from "@/types/pagination";

export type ReviewUser = {
  id: number;
  name: string;
};

export type Review = {
  id: number;
  star: number;
  comment: string;
  userId: number;
  bookId: number;
  createdAt: string;
  user: ReviewUser;
};

export type BookReviewsData = {
  bookId: number;
  reviews: Review[];
  pagination: Pagination;
};

export type GetBookReviewsParams = {
  bookId: number;
  page: number;
  limit: number;
};

export interface CreateReviewPayload {
  bookId: number
  star: number
  comment: string
}


export interface MyReview {
  id: number
  star: number
  comment: string
  createdAt: string
  book: Book
}


export interface MyReviewsData {
  reviews: MyReview[]
  pagination: Pagination
}

export type GetMyReviewsParams = {
  q?: string
  page: number
  limit: number
}

