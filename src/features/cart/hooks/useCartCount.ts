import { getCart } from "@/features/cart/api";
import { cartKeys } from "@/features/cart/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useCartCount = () => {
  return useQuery({
    queryKey: cartKeys.items(),
    queryFn: getCart,
    select: (cart) => cart.items.length,
    staleTime: 10_000,
  });
};
