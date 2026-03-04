import { clearCart } from "@/features/cart/api";
import { cartKeys } from "@/features/cart/queryKeys";
import { Cart } from "@/features/cart/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useClearCart = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: clearCart,

    onMutate: async () => {
      await qc.cancelQueries({ queryKey: cartKeys.items() });

      const prev = qc.getQueryData<Cart>(cartKeys.items());
      qc.setQueryData<Cart>(cartKeys.items(), { cartId : -1,items: [] });

      return { prev };
    },

    onError: (_err, _vars, ctx) => {
        toast.success("Failed clear cart")
      if (ctx?.prev) qc.setQueryData(cartKeys.items(), ctx.prev);
    },

    onSuccess: () => {
        toast.success("Successfully clear cart")
      qc.setQueryData<Cart>(cartKeys.items(), {cartId : -1, items: [] });
    },

    onSettled: () => {
      qc.invalidateQueries({ queryKey: cartKeys.items() });
    },
  });
};
