import { getCart } from "@/features/cart/api";
import { cartKeys } from "@/features/cart/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useCart = () => {
  return useQuery({
    queryKey: cartKeys.items(),
    queryFn: getCart,
    staleTime: 10_000,
  });
};