"use client"

import React, { useState } from "react"
import { useAdminBooks } from "@/features/books/hooks/useAdminBooks"
import { mapStatusUiToApi, type AdminBookStatusUI } from "../ui/admin/status"
import { AdminBooksListSkeleton, AdminBooksError, AdminBooksEmpty, AdminBooksList, AdminBooksStatusTabs} from "@/features/books/ui/admin"
import { useDebounce } from "@/lib"
import { Button } from "@/components/ui/button"
import { SearchInput } from "@/components/ui/search-input"
import { PaginationBar } from "@/shared/components/PaginationBar"
import { useRouter } from "next/navigation"


export const AdminBookListPage: React.FC = () => {
  const [status, setStatus] = React.useState<AdminBookStatusUI>("all")
  const router = useRouter();

  const [q, setQ] = useState("")
  const debouncedQ = useDebounce(q, 400)

   const [page, setPage] = React.useState(1)
  const limit = 20;

  const booksQ = useAdminBooks({
    status: mapStatusUiToApi(status),
    q: debouncedQ.trim() ? debouncedQ.trim() : undefined,
    page,
    limit,
  })

  const handleAdd = () => {

  }

  const handlePreview = (id: number) => {
    router.push(`/admin/preview/${id}`)
  }

  const handleEdit = (id: number) => {

   router.push(`/admin/edit/${id}`)
  }

  const handleDelete = (id: number) => {
    console.log("delete", id)
  }

  return (
    <div className="space-y-6">
    <div className="space-y-4">
      <div className="text-2xl font-bold text-foreground">Book List</div>

      <div className="w-full md:w-150 space-y-3">
        <Button className="w-full md:w-62.5 rounded-full h-12" onClick={handleAdd}>
          Add Book
        </Button>

        <SearchInput
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search book"
        />

        <div className="overflow-x-auto">
          <div className="min-w-max">
            <AdminBooksStatusTabs value={status} onChange={setStatus} />
          </div>
        </div>
      </div>
    </div>

      {booksQ.isLoading ? (
        <AdminBooksListSkeleton />
      ) : booksQ.isError ? (
        <AdminBooksError />
      ) : (booksQ.data?.books?.length ?? 0) === 0 ? (
        <AdminBooksEmpty />
      ) : (
        <>
          <AdminBooksList
            books={booksQ.data?.books ?? []}
            onPreview={handlePreview}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </>
      )}

      <PaginationBar
            page={booksQ.data?.pagination.page ?? page}
            totalPages={booksQ.data?.pagination.totalPages ?? 1}
            onPageChange={setPage}
          />
    </div>
  )
}