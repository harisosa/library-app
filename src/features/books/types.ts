import { Pagination } from "@/types/pagination"

export type BookStatus =  "all" | "available" | "borrowed" | "returned"

export type Book = {
  id: number
  title: string
  description: string
  isbn: string
  publishedYear: number
  coverImage?: string | null
  rating: number
  reviewCount: number
  totalCopies: number
  availableCopies: number
  borrowCount: number
  authorId: number
  categoryId: number
  createdAt: string
  updatedAt: string
  author?: BookAuthor
  category?: BookCategory
}

export type RecommendMode = "rating" | "borrow" | "newest" | string

export type RecommendBooksResponse = ListBookPagniation & {
  mode: RecommendMode
}

export type ListBookPagniation = {
    books: Book[]
    pagination: Pagination

}

export type BookAuthor = {
  id: number
  name: string
  bio: string
  createdAt: string
  updatedAt: string
}

export type BookCategory = {
  id: number
  name: string
  createdAt: string
  updatedAt: string
}

export type ReviewUser = {
  id: number
  name: string
}

export type BookReview = {
  id: number
  star: 1 | 2 | 3 | 4 | 5
  comment: string
  userId: number
  bookId: number
  createdAt: string
  user: ReviewUser
}

export type BookDetail = {
  id: number
  title: string
  description: string
  isbn: string
  publishedYear: number
  coverImage: string
  rating: number
  reviewCount: number
  totalCopies: number
  availableCopies: number
  borrowCount: number
  authorId: number
  categoryId: number
  createdAt: string
  updatedAt: string
  author: BookAuthor
  category: BookCategory
  reviews: BookReview[]
}

export type BooksListFilters = {
  q?: string
  status? : BookStatus;
  categoryId?: number
  authorId?: number
  minRating?: number
  page?: number
  limit?: number
}
