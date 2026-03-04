
import { Book } from "@/features/books/types";
import { Pagination } from "@/types/pagination";

export type LoanStatusTab = "all" | "active" | "returned" | "overdue";

export type LoanItemStatus = "BORROWED" | "RETURNED" | "OVERDUE"| "ACTIVE";



export type Loan = {
  id: number;
  status: LoanItemStatus;
  displayStatus: string;
  borrowedAt: string; 
  dueAt: string;
  returnedAt: string | null;
  durationDays: number;
  borrower: LoanBorrower
  book: Book;
};

export interface LoanBorrower {
  id: number
  name: string
  email: string
  phone: string | null
}


export type GetLoansParams = {
  status: LoanStatusTab;
  q?: string;
  page: number;
  limit: number;
};


export type LoanResponse = {
    loans: Loan[];
    pagination: Pagination;
}