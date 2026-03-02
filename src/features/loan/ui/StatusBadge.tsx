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
    case "BORROWED":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "RETURNED":
      return "bg-slate-50 text-slate-700 border-slate-200";
    case "OVERDUE":
      return "bg-rose-50 text-rose-700 border-rose-200";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export const StatusBadge: React.FC<Props> = ({ status, displayStatus, className }) => {
  const label = mapStatusToLabel(status, displayStatus);

  return (
    <Badge
      variant="outline"
      className={[
        "rounded-md px-2 py-0.5 text-xs font-medium",
        mapStatusToClasses(status),
        className ?? "",
      ].join(" ")}
    >
      {label}
    </Badge>
  );
};