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

export type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
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