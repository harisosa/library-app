import React from "react"
import type { Book } from "@/features/books/types"
import { AdminBookCard } from "./AdminBookCard"

type Props = {
  books: Book[]
  onPreview: (id: number) => void
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}

export const AdminBooksList: React.FC<Props> = ({ books, onPreview, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      {books.map((b) => (
        <AdminBookCard
          key={b.id}
          book={b}
          onPreview={onPreview}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}