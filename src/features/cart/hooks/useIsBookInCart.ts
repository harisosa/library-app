import { getCart } from "@/features/cart/api";
import { cartKeys } from "@/features/cart/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useIsBookInCart = (bookId: number) => {
  return useQuery({
    queryKey: cartKeys.items(),
    queryFn: getCart,
    select: (cart) => cart.items.some((it) => it.bookId === bookId),
    staleTime: 10_000,
  });
};