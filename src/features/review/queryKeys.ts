export const reviewsQueryKeys = {
  all: ["reviews"] as const,

  my: () => [...reviewsQueryKeys.all, "me"] as const,
  myInfinite: (args: { q: string; limit: number }) =>
    [
      ...reviewsQueryKeys.my(),
      "infinite",
      { q: args.q, limit: args.limit },
    ] as const,

  byBook: (bookId: number) =>
    [...reviewsQueryKeys.all, "book", bookId] as const,
  byBookInfinite: (bookId: number, limit: number) =>
    [...reviewsQueryKeys.byBook(bookId), "infinite", { limit }] as const,
};
