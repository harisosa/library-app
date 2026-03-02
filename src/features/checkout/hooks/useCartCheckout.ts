import { useQuery } from "@tanstack/react-query";
import { cartQueryKeys } from "../queryKeys";
import { getCartCheckout } from "@/features/checkout/api";

export const useCartCheckout = () => {
  return useQuery({
    queryKey: cartQueryKeys.checkout(),
    queryFn: getCartCheckout,
    staleTime: 10_000,
  });
};

