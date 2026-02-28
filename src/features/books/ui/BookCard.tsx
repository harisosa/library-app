// src/features/home/ui/recommendation/RecommendationBookCard.tsx
"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"
import type { Book } from "@/features/books/types"
import { BookCover } from "@/features/books/ui/BookCover"

type BookCardProps = {
  book: Book
  className?: string
}

export const BookCard: React.FC<BookCardProps> = ({ book, className }) => {
  return (
    <Card
      className={cn(
        "overflow-hidden border-none rounded-2xl bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] p-0",
        "w-43 h-92.5 xl:w-56 xl:h-117",
        className,
      )}
    >
      <div
        className={cn(
          "relative",
          "w-43 h-64.5 xl:w-56  lg:h-84",
        )}
      >
        <BookCover src={book.coverImage} alt={book.title} />
      </div>

      <div className="flex flex-col p-4 gap-1">

          <div className="text-lg font-bold line-clamp-2">
            {book.title || "Book Name"}
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