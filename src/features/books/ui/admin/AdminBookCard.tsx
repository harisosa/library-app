import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Book } from "@/features/books/types"
import { AdminBookActions } from "@/features/books/ui/admin/AdminBookActions"


type Props = {
  book: Book
  onPreview: (id: number) => void
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}

export const AdminBookCard: React.FC<Props> = ({ book, onPreview, onEdit, onDelete }) => {
  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 px-4 py-4 md:px-6 md:py-5">
      <div className="flex items-center gap-4">
        <div className="relative h-[120px] w-[84px] shrink-0 overflow-hidden rounded-xl bg-muted">
          <Image
            src={book.coverImage ?? ''}
            alt={book.title}
            fill
            className="object-cover"
            sizes="84px"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <Badge variant="secondary" className="mb-2 rounded-full">
                {book.category?.name ?? "—"}
              </Badge>

              <div className="truncate text-base font-semibold text-foreground md:text-lg">
                {book.title}
              </div>

              <div className="mt-1 truncate text-sm text-muted-foreground">
                {book.author?.name ?? "—"}
              </div>

              <div className="mt-2 flex items-center gap-2 text-sm">
                <span aria-hidden>⭐</span>
                <span className="font-medium">{book.rating}</span>
              </div>
            </div>

            {/* desktop */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" className="rounded-full" onClick={() => onPreview(book.id)}>
                Preview
              </Button>
              <Button variant="outline" className="rounded-full" onClick={() => onEdit(book.id)}>
                Edit
              </Button>
              <Button
                variant="outline"
                className="rounded-full text-destructive hover:text-destructive"
                onClick={() => onDelete(book.id)}
              >
                Delete
              </Button>
            </div>

            {/* mobile */}
            <div className="md:hidden">
              <AdminBookActions
                onPreview={() => onPreview(book.id)}
                onEdit={() => onEdit(book.id)}
                onDelete={() => onDelete(book.id)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}