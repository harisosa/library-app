import React from "react"
import { cn } from "@/lib/utils"
import { AdminBookStatusUI } from "@/features/books/ui/admin"


type Props = {
  value: AdminBookStatusUI
  onChange: (v: AdminBookStatusUI) => void
}
const STATUS_TABS: Array<{ label: string; value: AdminBookStatusUI }> = [
  { label: "All", value: "all" },
  { label: "Available", value: "available" },
  { label: "Borrowed", value: "borrowed" },
  { label: "Returned", value: "returned" },
]
export const AdminBooksStatusTabs: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      {STATUS_TABS.map((t) => {
        const active = t.value === value
        return (
          <button
            key={t.value}
            type="button"
            onClick={() => onChange(t.value)}
            className={cn(
              "h-9 rounded-full px-4 text-sm transition",
              "border border-border bg-white text-foreground",
              "hover:bg-muted/40",
              active && "border-primary text-primary bg-primary/5"
            )}
          >
            {t.label}
          </button>
        )
      })}
    </div>
  )
}