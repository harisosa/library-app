import { deleteCartItem } from "@/features/cart/api";
import { cartKeys } from "@/features/cart/queryKeys";
import { Cart } from "@/features/cart/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useDeleteCartItem = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (itemId: number) => deleteCartItem(itemId),

    onMutate: async (itemId) => {
      await qc.cancelQueries({ queryKey: cartKeys.items() });

      const prev = qc.getQueryData<Cart>(cartKeys.items());
      if (prev) {
        qc.setQueryData<Cart>(cartKeys.items(), {
          ...prev,
          items: prev.items.filter((it) => it.id !== itemId),
        });
      }

      return { prev };
    },

    onError: (_err, _itemId, ctx) => {
      if (ctx?.prev) qc.setQueryData(cartKeys.items(), ctx.prev);
    },

    onSettled: () => {
      toast.success("Successfully delete book")
      qc.invalidateQueries({ queryKey: cartKeys.items() });
    },
  });
};