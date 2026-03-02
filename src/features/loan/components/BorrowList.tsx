"use client";

import * as React from "react";
import type { LoanStatusTab } from "../types";
import { useMyLoansInfinite } from "../hooks/useMyLoansInfinite";
import { SearchInput } from "@/components/ui/search-input";
import { BorrowedListError, BorrowedListSkeleton, LoanCard, StatusTabs } from "@/features/loan/ui";
import { LoadMoreButton } from "@/components/ui/load-more-button";

const useDebouncedValue = <T,>(value: T, delayMs: number) => {
  const [debounced, setDebounced] = React.useState<T>(value);

  React.useEffect(() => {
    const t = window.setTimeout(() => setDebounced(value), delayMs);
    return () => window.clearTimeout(t);
  }, [value, delayMs]);

  return debounced;
};

export const BorrowedList: React.FC = () => {
  const [status, setStatus] = React.useState<LoanStatusTab>("all");
  const [search, setSearch] = React.useState("");

  const q = useDebouncedValue(search, 350);

  const loansQ = useMyLoansInfinite({ status, q, limit: 10 });

  const loans = React.useMemo(() => {
    const pages = loansQ.data?.pages ?? [];
    return pages.flatMap((p) => p.loans);
  }, [loansQ.data]);

  const isInitialLoading = loansQ.isLoading;
  const isError = loansQ.isError;
  const canLoadMore = Boolean(loansQ.hasNextPage);
  const isLoadingMore = loansQ.isFetchingNextPage;

  if(isInitialLoading)return <BorrowedListSkeleton />;
  if(isError) return          <BorrowedListError title="Failed to load borrowed list" description="Please try again." onRetry={() => loansQ.refetch()} />

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
              <LoanCard
                key={loan.id}
                loan={loan}
                onGiveReview={({ loanId, bookId }) => {
                  // TODO: wiring modal/navigate sesuai flow kamu
                  console.log("give review", { loanId, bookId });
                }}
              />
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
    </div>
  );
};