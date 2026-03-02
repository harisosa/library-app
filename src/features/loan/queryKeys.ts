import { LoanStatusTab } from "@/features/loan/types";

export const loansKeys = {
  all: ["loans"] as const,
  myList: (params: { status: LoanStatusTab; q: string; limit: number }) =>
    [...loansKeys.all, "my", params] as const,
};