import { BookDetail } from "@/features/books/types";

export type CheckoutUser = {
  name: string;
  email: string;
  nomorHandphone: string;
};

export type CheckoutItem = {
  id: number;
  bookId: number;
  book: BookDetail;
};

export type CartCheckoutData = {
  user: CheckoutUser;
  items: CheckoutItem[];
  itemCount: number;
};

export type PostLoansFromCartPayload = {
  itemIds: number[];
  days: number;
  borrowDate: string;
};


export type BorrowFromCartFailedItem = {
  cartItemId: number;
  bookId: number;
  reason: string;
};

export type LoanStatus = "BORROWED" | "RETURNED";

export type BorrowFromCartLoan = {
  id: number;
  userId: number;
  bookId: number;
  status: LoanStatus;
  borrowedAt: string;
  dueAt: string;
  returnedAt: string | null;
  returnByMessage: string;
};

export type BorrowFromCartData = {
  loans: BorrowFromCartLoan[];
  failed: BorrowFromCartFailedItem[];
  removedFromCart: number;
  message: string; 
};
