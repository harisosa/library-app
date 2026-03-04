"use client"

import { useQuery } from "@tanstack/react-query"
import { GetLoansParams } from "@/features/loan/types"
import { loansKeys } from "@/features/loan/queryKeys"
import { getAdminLoans } from "@/features/loan/api"


export const useAdminLoans = (params: GetLoansParams) => {
  return useQuery({
    queryKey: loansKeys.adminLoans(params),
    queryFn: () => getAdminLoans(params),
  })
}