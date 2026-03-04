import React, { PropsWithChildren } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import type { Loan, LoanItemStatus } from "../types";
import { StatusBadge } from "@/features/loan/ui/StatusBadge";
import { cn, formatDate } from "@/lib/utils";

type BorrowedCardProps = PropsWithChildren & {
  loan: Loan;
  className?: string;
};

export const BorrowedCard: React.FC<BorrowedCardProps> = ({
  loan,
  className,
  children,
}) => {
  const borrowedLabel = formatDate(loan.borrowedAt);
  const dueLabel = formatDate(loan.dueAt);

  const status = loan.displayStatus.toUpperCase() as LoanItemStatus;

  return (
    <div
      className={cn("rounded-2xl border bg-background shadow-sm", "px-5 py-4", className ?? "")}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="text-md font-bold text-neutral-950">Status</div>
          <StatusBadge status={status} displayStatus={loan.displayStatus} />
        </div>

        <div className="flex items-center gap-3">
          <div className="text-md font-bold text-neutral-950">Due Date</div>
          <Badge className="h-8 rounded-lg bg-[#EE1D521A] px-2 py-0.5 text-sm font-bold text-[#EE1D52] hover:bg-rose-50">
            {dueLabel}
          </Badge>
        </div>
      </div>

      <Separator className="my-4" />

      {/* CONTENT */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
        {/* LEFT: Book */}
        <div className="flex min-w-0 items-center gap-4">
          <div className="relative h-34.5 w-23 shrink-0 overflow-hidden rounded-lg bg-muted">
            <Image
              src={loan.book.coverImage ?? ""}
              alt={loan.book.title}
              fill
              className="object-cover"
              priority={false}
            />
          </div>

          <div className="flex h-full min-w-0 flex-col">
            <Badge variant="outline" className="mb-2 rounded-md px-2 py-0.5 text-sm font-bold">
              {loan.book.category?.name ?? "Category"}
            </Badge>

            <div className="text-xl font-bold wrap-break-word line-clamp-2">
              {loan.book.title}
            </div>

            <div className="truncate text-md text-neutral-700">
              {loan.book.author?.name ?? "Author name"}
            </div>

            <div className="mt-2 text-md font-bold">
              {borrowedLabel} <span className="px-2">•</span> Duration {loan.durationDays} Days
            </div>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <div className="flex md:justify-end">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};