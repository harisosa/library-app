import { AddCartItemPayload, Cart } from "@/features/cart/types";
import { api } from "@/lib/http";

export const getCart = async (): Promise<Cart> => {
  return await api<Cart>({
    method: "GET",
    url: "/cart",
  });
};

export const addCartItem = async (
  payload: AddCartItemPayload
): Promise<Cart> => {
  return await api<Cart>({
    method: "POST",
    url: "/cart/items",
    data: payload,
  });
};

export const clearCart = async (): Promise<void> => {
  await api<void>({
    method: "DELETE",
    url: "/cart",
  });
};


export const deleteCartItem = async (itemId: number): Promise<void> => {
  await api<void>({
    method: "DELETE",
    url: `/cart/items/${itemId}`,
  });
};