import { Pagination } from "@/types/pagination"

export type BookAuthor = {
  id: number
  name: string
}

export type BookCategory = {
  id: number
  name: string
}

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

export type RecommendBooksResponse = {
    mode: RecommendMode
    books: Book[]
    pagination: Pagination

}