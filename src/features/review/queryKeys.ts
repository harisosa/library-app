export const reviewsQueryKeys = {
  all: ["reviews"] as const,

  byBook: (bookId: number) => [...reviewsQueryKeys.all, "book", bookId] as const,

  byBookInfinite: (bookId: number, limit: number) =>
    [...reviewsQueryKeys.byBook(bookId), "infinite", { limit }] as const,
};