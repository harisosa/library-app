export const authorsQueryKeys = {
  all: ['authors'] as const,

  popular: () => [...authorsQueryKeys.all, 'popular'] as const,

  popularWithLimit: (limit: number) =>
    [...authorsQueryKeys.popular(), { limit }] as const,
  books: (authorId: number, page: number, limit: number) =>
    [...authorsQueryKeys.all, "books", authorId, page, limit] as const,
}