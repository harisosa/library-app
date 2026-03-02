export const cartQueryKeys = {
  all: ["cart"] as const,
  checkout: () => [...cartQueryKeys.all, "checkout"] as const,
};