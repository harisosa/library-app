"use client";

import React, { useState } from "react";
import type { LoanStatusTab } from "../types";
import { SearchInput } from "@/components/ui/search-input";
import { BorrowedCard, BorrowedListError, BorrowedListSkeleton, StatusTabs } from "@/features/loan/ui";
import { useAdminLoans } from "@/features/loan/hooks/useAdminLoans";
import { PaginationBar } from "@/shared/components/PaginationBar";
import { useDebounce } from "@/lib";
import { Separator } from "@/components/ui/separator";



export const AdminBorrowedList: React.FC = () => {

    const [status, setStatus] = useState<LoanStatusTab>("all");
    const [search, setSearch] = useState("");

    const [page, setPage] = React.useState(1)
    const debouncedQ = useDebounce(search, 400)

    const { data: borrowed, isLoading, isError, refetch } = useAdminLoans({
        status: status,
        q: debouncedQ.trim() ? debouncedQ.trim() : undefined,
        page,
        limit: 20,
    })
    const loans = borrowed?.loans ?? [];
    const pagination = borrowed?.pagination

    if (isLoading) return <BorrowedListSkeleton />;
    if (isError) return <BorrowedListError title="Failed to load borrowed list" description="Please try again." onRetry={() => refetch()} />

    return (
        <div className="w-full px-4 py-8 sm:px-6">
            <h1 className="text-3xl font-semibold tracking-tight">Borrowed List</h1>

            <div className="mt-5">
                <SearchInput
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search book" />
            </div>

            <div className="mt-4">
                <StatusTabs value={status} onChange={setStatus} />
            </div>

            <div className="mt-6 space-y-5">
                {!isLoading && !isError && loans.length === 0 ? (
                    <div className="rounded-2xl border bg-background p-8 text-center">
                        <div className="text-base font-semibold">No loans found</div>
                        <div className="mt-1 text-sm text-muted-foreground">
                            Try changing the tab or search keyword.
                        </div>
                    </div>
                ) : null}

                {!isLoading && !isError
                    ? loans.map((loan) => (
                        <BorrowedCard
                            key={loan.id}
                            loan={loan}
                        >
                            <Separator className="my-2 md:hidden" />
                            <div className="flex flex-col">
                                <span className="text-md font-semibold text-neutral-950">borrower&apos;s name</span>
                                <span className="text-xl font-bold text-neutral-950">{loan.borrower.name}</span>
                            </div>
                        </BorrowedCard>
                    ))
                    : null}
            </div>
            <PaginationBar
                page={pagination?.page ?? page}
                totalPages={pagination?.totalPages ?? 1}
                onPageChange={setPage} />
        </div>
    );
};