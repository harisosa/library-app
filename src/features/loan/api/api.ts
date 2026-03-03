import { api } from "@/lib/http/api";
import type { GetMyLoansParams, MyLoanResponse,  } from "../types";

export const getMyLoans = async (
  params: GetMyLoansParams
): Promise<MyLoanResponse> => {
  return await api<MyLoanResponse>({
    method: "GET",
    url: "/loans/my",
    params,
  });
};

export const returnLoan = (loanId: number) => {
  return api<void>({
    method: 'PATCH',
    url: `/loans/${loanId}/return`,
  })
}