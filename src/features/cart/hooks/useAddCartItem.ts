import { addCartItem } from "@/features/cart/api";
import { cartKeys } from "@/features/cart/queryKeys";
import { Cart } from "@/features/cart/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useAddCartItem = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: addCartItem,

    onMutate: async (vars) => {
      await qc.cancelQueries({ queryKey: cartKeys.items() });

      const prev = qc.getQueryData<Cart>(cartKeys.items());
      if (prev) {
        const exists = prev.items.some((x) => x.bookId === vars.bookId);

        if (!exists) {
          qc.setQueryData<Cart>(cartKeys.items(), {
            ...prev,
            items: [
              ...prev.items,
              {
                id: -Date.now(),
                bookId: vars.bookId,
              },
            ],
          });
        }
      }

      return { prev };
    },

    onError: (_err, _vars, ctx) => {
      toast.error("Failed add to cart")
      if (ctx?.prev) qc.setQueryData(cartKeys.items(), ctx.prev);
    },

    onSuccess: (serverCart) => {
      toast.success("Successfully add to cart")
      qc.setQueryData(cartKeys.items(), serverCart);
    },

    onSettled: () => {
      qc.invalidateQueries({ queryKey: cartKeys.items() });
    },
  });
};