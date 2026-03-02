
import { BorrowFromCartData, CartCheckoutData, PostLoansFromCartPayload } from "@/features/checkout/types";
import { api } from "@/lib/http"


export const getCartCheckout = async (): Promise<CartCheckoutData> => {
  return api<CartCheckoutData>({
    method: "GET",
    url: "/cart/checkout",
  });
};



export const postLoan = async (
  payload: PostLoansFromCartPayload
): Promise<BorrowFromCartData> => {
  return api<BorrowFromCartData>({
    method: "POST",
    url: "/loans/from-cart",
    data: payload,
  });
};