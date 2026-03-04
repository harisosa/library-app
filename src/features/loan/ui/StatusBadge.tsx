import * as React from "react";
import { Badge } from "@/components/ui/badge";
import type { LoanItemStatus } from "../types";

type Props = {
  status: LoanItemStatus;
  displayStatus?: string;
  className?: string;
};

const mapStatusToLabel = (status: LoanItemStatus, displayStatus?: string) => {
  if (displayStatus?.trim()) return displayStatus.trim();
  switch (status) {
    case "ACTIVE" :
    case "BORROWED": 
      return "Active";
    case "RETURNED":
      return "Returned";
    case "OVERDUE":
      return "Overdue";
    default:
      return status;
  }
};

const mapStatusToClasses = (status: LoanItemStatus) => {
  switch (status) {
    case "ACTIVE" :
    case "BORROWED":
      return "bg-emerald-50 text-[#24A500]";
    case "RETURNED":
      return "bg-slate-50 text-slate-700";
    case "OVERDUE":
      return "bg-rose-50 text-rose-700";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const StatusBadge: React.FC<Props> = ({ status, displayStatus, className }) => {
  const label = mapStatusToLabel(status, displayStatus);
  return (
    <Badge
      variant="outline"
      className={[
        "rounded-lg h-8 px-2 py-0.5 text-sm font-bold border-none",
        mapStatusToClasses(status),
        className ?? "",
      ].join(" ")}
    >
      {label}
    </Badge>
  );
};