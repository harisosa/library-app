"use client";

import React, { useMemo, useState } from "react";
import type { LoanStatusTab } from "../types";
import { SearchInput } from "@/components/ui/search-input";
import { BorrowedCard, BorrowedListError, BorrowedListSkeleton, BorrowedActionButton, StatusTabs } from "@/features/loan/ui";
import { LoadMoreButton } from "@/components/ui/load-more-button";
import { ConfirmationDialog } from "@/components/ui/confirmation-dialog";

import { useReturnLoan, useMyLoansInfinite } from "@/features/loan/hooks";
import { GiveReviewDialog } from "@/features/review/components/GiveReviewDialog";
import { useDebounce } from "@/lib";


export const BorrowedList: React.FC = () => {
  const { mutate, isPending } = useReturnLoan()
  const [status, setStatus] = useState<LoanStatusTab>("all");
  const [search, setSearch] = useState("");

  const [openConfirmation, setOpenConfirmationDialog] = useState(false);
  const [openDialogReview, setOpenDialogReview] = useState(false)
  const [loanId, setLoanId] = useState<number|null>(null)
  const [bookId, setBookId] = useState<number | null> (null)

  const q = useDebounce(search, 350);

  const loansQ = useMyLoansInfinite({ status, q, limit: 10 });

  const loans = useMemo(() => {
    const pages = loansQ.data?.pages ?? [];
    return pages.flatMap((p) => p.loans);
  }, [loansQ.data]);

  const isInitialLoading = loansQ.isLoading;
  const isError = loansQ.isError;
  const canLoadMore = Boolean(loansQ.hasNextPage);
  const isLoadingMore = loansQ.isFetchingNextPage;

  if(isInitialLoading)return <BorrowedListSkeleton />;
  if(isError) return          <BorrowedListError title="Failed to load borrowed list" description="Please try again." onRetry={() => loansQ.refetch()} />

   const handleReturnConfirm = () => {
    if(!loanId) return 
    mutate(loanId, {
      onSuccess: () => {
        setOpenConfirmationDialog(false)
        setLoanId(null);
      },
    })
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight">Borrowed List</h1>

      <div className="mt-5">
        <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="mt-4">
        <StatusTabs value={status} onChange={setStatus} />
      </div>

      <div className="mt-6 space-y-5">
        {!isInitialLoading && !isError && loans.length === 0 ? (
          <div className="rounded-2xl border bg-background p-8 text-center">
            <div className="text-base font-semibold">No loans found</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Try changing the tab or search keyword.
            </div>
          </div>
        ) : null}

        {!isInitialLoading && !isError
          ? loans.map((loan) => (
              <BorrowedCard
                key={loan.id}
                loan={loan}
              >
                <BorrowedActionButton 
                  isReturned={loan.status === 'RETURNED'}
                                onGiveReview={() => {
                  setBookId(loan.book.id);
                  setOpenDialogReview(true);
                }}
                onReturn={()=>{
                  setLoanId(loan.id);
                  setOpenConfirmationDialog(true);
                }}
                />
              </BorrowedCard>
            ))
          : null}
      </div>

      {!isInitialLoading && !isError && loans.length > 0 ? (
        <div className="mt-8">
          <LoadMoreButton
            onClick={() => loansQ.fetchNextPage()}
            disabled={!canLoadMore}
            loading={isLoadingMore}
          />
        </div>
      ) : null}

    <ConfirmationDialog
        open={openConfirmation}
        onOpenChange={setOpenConfirmationDialog}
        title="Return Book"
        description="Once returned, you won't be able to undo this action."
        cancelText="Cancel"
        confirmText="Confirm"
        isConfirmLoading={isPending}
        onConfirm={handleReturnConfirm}
      />
      <GiveReviewDialog open={openDialogReview} onOpenChange={setOpenDialogReview} bookId={bookId ?? 0} />
    </div>
  );
};