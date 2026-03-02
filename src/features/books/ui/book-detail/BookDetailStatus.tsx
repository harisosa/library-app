import * as React from "react"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

type StatItem = {
  value: string | number
  label: string
}

type Props = {
  items: [StatItem, StatItem, StatItem]
}

export const BookDetailStats: React.FC<Props> = ({ items }) => {
  return (
    <div className="mt-5.5">
      <div className="flex">
        {items.map((it, idx) => (
          <div key={it.label} className={cn(
            "relative py-2",
            idx !== 0 ? "px-5" : "pr-5"
          )}>
            {idx !== 0 ? (
              <Separator
                orientation="vertical"
                className="absolute left-0 top-1/2 h-10 -translate-y-1/2"
              />
            ) : null}

            <div className="text-display-xs font-bold text-neutral-950 lg:w-25.5">
              {typeof it.value === "number" ? it.value : it.value}
            </div>
            <div className="mt-1 text-md font-medium  text-neutral-950">{it.label}</div>
          </div>
        ))}
      </div>
      <Separator className="mt-5" />
    </div>
  )
}