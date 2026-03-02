import { LoanStatusTab } from "@/features/loan/types";

export const TABS: Array<{ value: LoanStatusTab; label: string }> = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "returned", label: "Returned" },
  { value: "overdue", label: "Overdue" },
];
