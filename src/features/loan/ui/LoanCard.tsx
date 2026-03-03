import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import type { Loan } from "../types";
import { StatusBadge } from "@/features/loan/ui/StatusBadge";
import { formatDate } from "@/lib/utils";

type Props = {
  loan: Loan;
  onGiveReview?: (bookId: number) => void;
  onReturn?: (loanId: number) => void;
  className?: string;
};


export const LoanCard: React.FC<Props> = ({ loan, onGiveReview, onReturn, className }) => {
  const borrowedLabel = formatDate(loan.borrowedAt);
  const dueLabel = formatDate(loan.dueAt);

  return (
    <div
      className={[
        "rounded-2xl border bg-background shadow-sm",
        "px-5 py-4",
        className ?? "",
      ].join(" ")}
    >

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="text-sm font-medium text-muted-foreground">Status</div>
          <StatusBadge status={loan.status} displayStatus={loan.displayStatus} />
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm font-medium text-muted-foreground">Due Date</div>
          <Badge className="rounded-md bg-rose-50 px-2 py-0.5 text-xs font-medium text-rose-700 hover:bg-rose-50">
            {dueLabel}
          </Badge>
        </div>
      </div>

      <Separator className="my-4" />


      <div className="flex items-center justify-between gap-6">
        <div className="flex min-w-0 items-center gap-4">

          <div className="relative h-23 w-18 overflow-hidden rounded-lg bg-muted">
            <Image
              src={loan.book.coverImage}
              alt={loan.book.title}
              fill
              className="object-cover"
              sizes="72px"
              priority={false}
            />
          </div>


          <div className="min-w-0">
            <Badge
              variant="outline"
              className="mb-2 rounded-md px-2 py-0.5 text-xs font-medium"
            >
              {loan.book.category?.name ?? "Category"}
            </Badge>

            <div className="truncate text-base font-semibold">{loan.book.title}</div>
            <div className="truncate text-sm text-muted-foreground">
              {loan.book.author?.name ?? "Author name"}
            </div>

            <div className="mt-2 text-sm text-muted-foreground">
              {borrowedLabel} <span className="px-2">•</span> Duration {loan.durationDays} Days
            </div>
          </div>
        </div>

        <div className="shrink-0">
          {loan.returnedAt ? (
                      <Button
            type="button"
            className="h-10 rounded-full px-6"
            onClick={() => onGiveReview && onGiveReview(loan.book.id)}
          >
            Give Review
          </Button>
          )
        : (
           <Button
            type="button"
            variant="outline"
            className="h-10 rounded-full px-6"
            onClick={() => onReturn && onReturn(loan.id)}
          >
            Return
          </Button>
        )
        }

        </div>
      </div>
    </div>
  );
};