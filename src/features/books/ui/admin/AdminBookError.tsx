import React from "react"
import { Button } from "@/components/ui/button"

export const AdminBooksError: React.FC = () => {
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
      <div className="text-base font-semibold">Failed to load books</div>
      <div className="mt-1 text-sm text-muted-foreground">
        Please try again. If it keeps happening, check your token / network.
      </div>

      <div className="mt-4">
        <Button variant="outline" className="rounded-full" onClick={() => window.location.reload()}>
          Reload
        </Button>
      </div>
    </div>
  )
}