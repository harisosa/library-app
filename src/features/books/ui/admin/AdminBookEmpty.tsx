import React from "react"

export const AdminBooksEmpty: React.FC = () => {
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
      <div className="text-base font-semibold">No books found</div>
      <div className="mt-1 text-sm text-muted-foreground">
        Try changing the status tab or search keyword.
      </div>
    </div>
  )
}