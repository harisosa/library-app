import { Book } from "@/features/books/types"
import { Pagination } from "@/types/pagination"

export interface Author {
  id: number
  name: string
  bio: string | null
  bookCount: number
  accumulatedScore: number
}

export interface PopularAuthorsResult {
  authors: Author[]
}


export type GetAuthorBooksParams = {
  authorId: number;
  page: number;
  limit: number;
};

export type AuthorBooksResponse = {
  author: Author;
  bookCount: number;
  books: Book[];
  pagination: Pagination;
};