export const booksQueryKeys = {
  all: ["books"] as const,

  recommended: (params: { by: string; limit: number }) =>
    [...booksQueryKeys.all, "recommended", params.by, params.limit] as const,
}