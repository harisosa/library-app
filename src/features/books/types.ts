import { Author } from "@/features/author/types";
import { Category } from "@/features/category/types";
import type { Pagination } from "@/types/pagination";

export type IsoDateString = string;

export type BookStatus = "all" | "available" | "borrowed" | "returned";

export type RecommendMode = "rating" | "borrow" | "newest" | (string & {});

export type ReviewUser = {
  id: number;
  name: string;
};

export type BookReview = {
  id: number;
  star: 1 | 2 | 3 | 4 | 5;
  comment: string;
  userId: number;
  bookId: number;
  createdAt: IsoDateString;
  user: ReviewUser;
};

export type BookCore = {
  id: number;
  title: string;
  description: string;
  isbn: string;
  publishedYear: number;
  coverImage?: string | null;
};

export type BookRefs = {
  authorId: number;
  categoryId: number;
};

export type BookInventory = {
  totalCopies: number;
  availableCopies: number;
};

export type BookStats = {
  rating: number;
  reviewCount: number;
  borrowCount: number;
};

export type BookMeta = {
  createdAt: IsoDateString;
  updatedAt: IsoDateString;
};

export type Book = BookCore &
  BookRefs &
  BookInventory &
  BookStats &
  BookMeta & {
    author?: Author;
    category?: Category;
  };

export type WithAuthor<T> = T & { author: Author };
export type WithCategory<T> = T & { category: Category };
export type WithReviews<T> = T & { reviews: BookReview[] };

export type BookDetail = WithReviews<WithCategory<WithAuthor<Book>>>;

export type ListBookPagination = {
  books: Book[];
  pagination: Pagination;
};

export type RecommendBooksResponse = ListBookPagination & {
  mode: RecommendMode;
};

export type BooksListFilters = {
  q?: string;
  status?: BookStatus;
  categoryId?: number;
  authorId?: number;
  minRating?: number;
  page?: number;
  limit?: number;
};


export type BookBaseFields = {
  title: string;
  description: string;
  isbn: string;
  publishedYear: number;
  authorId: number;
  authorName: string;
  categoryId: number;
  totalCopies: number;
  availableCopies: number;
};

export type UpdateBookPayload = BookBaseFields & {
  coverImage: string;
};

export type CreateBookFormDataFields = BookBaseFields & {
  coverImage: File | null;
};

export type BookUpsertValues = BookBaseFields & {
  coverFile: File | null;
  coverPreviewUrl: string | null;
  coverImageUrl: string | null;
};