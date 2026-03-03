import { BooksListFilters } from "@/features/books/types";

export const booksQueryKeys = {
  all: ["books"] as const,

  recommended: (params: { by: string; limit: number }) =>
    [...booksQueryKeys.all, "recommended", params.by, params.limit] as const,
  detail: (bookId: number) => [...booksQueryKeys.all, "detail", bookId] as const,
    listInfinite: (filters: BooksListFilters) =>
    [...booksQueryKeys.all, "list", "infinite", filters] as const,

  adminList: (params: {
    status?: string
    q?: string
    categoryId?: number
    authorId?: number
    page?: number
    limit?: number
  }) =>
    [
      ...booksQueryKeys.all,
      "admin",
      "list",
      params.status ?? "all",
      params.q ?? "",
      params.categoryId ?? null,
      params.authorId ?? null,
      params.page ?? 1,
      params.limit ?? 20,
    ] as const,
}