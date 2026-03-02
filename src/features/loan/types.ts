import { Author } from "@/features/author/types";
import { Category } from "@/features/category/types";
import { Pagination } from "@/types/pagination";

export type LoanStatusTab = "all" | "active" | "returned" | "overdue";

export type LoanItemStatus = "BORROWED" | "RETURNED" | "OVERDUE";



export type LoanBook = {
  id: number;
  title: string;
  description: string;
  isbn: string;
  publishedYear: number;
  coverImage: string;
  rating: number;
  reviewCount: number;
  totalCopies: number;
  availableCopies: number;
  borrowCount: number;
  authorId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  author: Author;
  category: Category;
};

export type Loan = {
  id: number;
  status: LoanItemStatus;
  displayStatus: string;
  borrowedAt: string; 
  dueAt: string;
  returnedAt: string | null;
  durationDays: number;
  book: LoanBook;
};



export type GetMyLoansParams = {
  status: LoanStatusTab;
  q?: string;
  page: number;
  limit: number;
};


export type MyLoanResponse = {
    loans: Loan[];
    pagination: Pagination;
}