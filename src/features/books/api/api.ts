import { api } from "@/lib/http"
import type { Book, BookDetail, BooksListFilters, BookUpsertValues, CreateBookFormDataFields, ListBookPagination, RecommendBooksResponse, RecommendMode, UpdateBookPayload } from "../types"

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

export const getBooks = async (params: BooksListFilters): Promise<ListBookPagination> => {
  return await api<ListBookPagination>({
    method: "GET",
    url: "/books",
    params,
  })
}

export const getAdminBooks = (params: BooksListFilters) => {
  return api<ListBookPagination>({
    method: "GET",
    url: "/admin/books",
    params,
  })
}

export const updateBook = async (args: {
  id: number;
  payload: BookUpsertValues;
}): Promise<Book> => {
  const { id, payload } = args;

  return api<Book>({
    method: "PUT",
    url: `/books/${id}`,
    data: payload,
  });
};

export const deleteBook = async (id: number): Promise<void> => {
  await api<void>({
    method: 'DELETE',
    url: `/books/${id}`,
  })
}

export const addBook = async (
  payload: CreateBookFormDataFields
): Promise<void> => {
  const formData = new FormData()

  formData.append('title', payload.title)
  formData.append('description', payload.description)
  formData.append('isbn', payload.isbn)
  formData.append('authorName', payload.authorName)
  formData.append('categoryId', String(payload.categoryId))
  formData.append('publishedYear', String(payload.publishedYear))
  formData.append('totalCopies', String(payload.totalCopies))
  formData.append('availableCopies', String(payload.availableCopies))

  if (payload.coverImage) {
    formData.append('coverImage', payload.coverImage)
  }

  await api<void>({
    method: 'POST',
    url: '/books',
    data: formData,
  })
}