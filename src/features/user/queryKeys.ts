export const userQueryKeys = {
  all: ['users'] as const,

  list: (params: {
    q?: string
    page: number
    limit: number
  }) =>
    [
      ...userQueryKeys.all,
      {
        q: params.q ?? '',
        page: params.page,
        limit: params.limit,
      },
    ] as const,
}