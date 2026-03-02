import { BookDetail } from "@/features/books/types";

export type CartItem = {
  id: number;
  bookId: number;
  addedAt?: string;
  book?: BookDetail;
};


export type Cart = {
  cartId: number;
  items: CartItem[];
};

export type AddCartItemPayload = {
  bookId: number;
};