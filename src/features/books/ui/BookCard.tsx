"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"
import type { Book } from "@/features/books/types"
import { BookCover } from "@/features/books/ui/BookCover"
import Link from "next/link"

type BookCardProps = {
  book: Book
  className?: string
}

export const BookCard: React.FC<BookCardProps> = ({ book, className }) => {
  return (
    <Card
      className={cn(
        "overflow-hidden border-none rounded-2xl bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] p-0",
        "w-full",
        className,
      )}

    >
      <div
        className={cn(
          "relative",
          "h-64.5 w-full lg:h-84",
        )}
      >
        <BookCover src={book.coverImage} alt={book.title} />
      </div>

      <div className="flex flex-col p-4 gap-1">

        <div className="">
          <Link
            href={`/books/${book.id}`}
            className="text-lg font-bold line-clamp-2"
            aria-label={`Open book detail ${book.id}`}
          >{book.title || "Book Name"}</Link>

        </div>
        <div className="text-md font-medium text-neutral-500 line-clamp-1">
          {book.author?.name ?? "Author name"}
        </div>
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="text-md font-semibold text-neutral-900">{Number(book.rating ?? 0).toFixed(1)}</span>
        </div>
      </div>
    </Card>
  )
}