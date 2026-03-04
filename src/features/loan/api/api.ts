import { api } from "@/lib/http/api";
import type { GetLoansParams, LoanResponse,  } from "../types";

export const getMyLoans = async (
  params: GetLoansParams
): Promise<LoanResponse> => {
  return await api<LoanResponse>({
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


export const getAdminLoans = async (
  params: GetLoansParams
): Promise<LoanResponse> => {
  return await api<LoanResponse>({
    method: "GET",
    url: "/admin/loans",
    params,
  })

}