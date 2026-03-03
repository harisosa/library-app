"use client"

import React from "react"
import { SearchInput } from "@/components/ui/search-input"
import { useDebounce } from "@/lib"
import { useGetUsers } from "@/features/user/hooks"
import { TableSkeleton, UsersError, UsersTable } from "@/features/user/ui"
import { PaginationBar } from "@/shared/components/PaginationBar"

export const UserComponent: React.FC = () => {
  const limit = 10

  const [q, setQ] = React.useState("")
  const [page, setPage] = React.useState(1)

  const debouncedQ = useDebounce(q.trim(), 350)

  React.useEffect(() => {
    setPage(1)
  }, [debouncedQ])

  const usersQ = useGetUsers({
    q: debouncedQ || undefined,
    page,
    limit,
  })

  const users = usersQ.data?.users ?? []
  const pagination = usersQ.data?.pagination

  const from =
    pagination && users.length > 0 ? (pagination.page - 1) * pagination.limit + 1 : 0
  const to =
    pagination ? (pagination.page - 1) * pagination.limit + users.length : 0
  const total = pagination?.total ?? 0
  const totalPages = pagination?.totalPages ?? 1
  const currentPage = pagination?.page ?? page

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">User</h1>

      <div className="max-w-115">
        <SearchInput
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search user"
        />
      </div>

      {/* table area */}
      {usersQ.isLoading ? (
        <TableSkeleton />
      ) : usersQ.isError ? (
        <UsersError onRetry={() => usersQ.refetch()} />
      ) : (
        <div className="lg:rounded-2xl lg:border bg-background overflow-hidden">
          <UsersTable users={users} page={currentPage} limit={limit} />

          <div className="border-t px-4 py-3 flex items-center justify-between gap-4 w-full">
            <p className="text-sm text-muted-foreground w-1/2 hidden lg:flex">
              Showing {from} to {to} of {total} entries
            </p>

            <PaginationBar
              page={currentPage}
              totalPages={totalPages}
              onPageChange={setPage}
              className="lg:w-1/2 w-full lg:justify-end"
            />
          </div>
        </div>
      )}
    </div>
  )
}