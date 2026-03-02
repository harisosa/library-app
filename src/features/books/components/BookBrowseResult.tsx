"use client"

import React from "react"
import { BookCard } from "@/features/books/ui/BookCard"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useBookListInfinite } from "@/features/books/hooks/useBookListInfinite"
import { BooksListFilters } from "@/features/books/types"
import { BookGridSkeleton } from "@/features/books/ui/skeleton/BookGridSkeleton"

type BookBrowseResultProps = {
    filters: BooksListFilters
    className?: string
}

export const BookBrowseResult: React.FC<BookBrowseResultProps> = ({ filters, className }) => {
    const q = useBookListInfinite({ ...filters, limit: 8 })

    if (q.isLoading) return <BookGridSkeleton />

    if (q.isError) {
        return (
            <div className={cn("rounded-xl border p-6", className)}>
                <p className="text-sm text-muted-foreground">Failed to load books.</p>
            </div>
        )
    }

    const books = q.data?.pages.flatMap((p) => p.books) ?? []
    if(books.length === 0) {
 return (
            <div className={cn("rounded-xl border p-6", className)}>
                <p className="text-sm text-muted-foreground">Books Not Fuound</p>
            </div>
        )
    }
    return (
        <div className={className}>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {books.map((b) => (
                    <BookCard key={b.id} book={b} />
                ))}
            </div>

            {q.hasNextPage && (
                <div className="mt-6 flex justify-center">
                    <Button onClick={() => q.fetchNextPage()} disabled={q.isFetchingNextPage}>
                        {q.isFetchingNextPage ? "Loading..." : "Load More"}
                    </Button>
                </div>
            )}
        </div>
    )
}