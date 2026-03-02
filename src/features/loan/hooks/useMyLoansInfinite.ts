"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import type { LoanStatusTab } from "../types";
import { getMyLoans } from "@/features/loan/api";
import { loansKeys } from "@/features/loan/queryKeys";


export const useMyLoansInfinite = (args: {
  status: LoanStatusTab;
  q?: string;
  limit?: number;
}) => {
  const limit = args.limit ?? 10;
  const q = (args.q ?? "").trim();

  return useInfiniteQuery({
    queryKey: loansKeys.myList({ status: args.status, q, limit }),
    initialPageParam: 1,
    queryFn: async ({ pageParam }) => {
      return getMyLoans({
        status: args.status,
        q,
        page: Number(pageParam),
        limit,
      });
    },
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.pagination;
      return page < totalPages ? page + 1 : undefined;
    },
    staleTime: 0,
  });
};