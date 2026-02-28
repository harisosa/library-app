export const authorsQueryKeys = {
  all: ['authors'] as const,

  popular: () => [...authorsQueryKeys.all, 'popular'] as const,

  popularWithLimit: (limit: number) =>
    [...authorsQueryKeys.popular(), { limit }] as const,
}