import * as React from "react"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type Props = {
  categoryName: string
  title: string
  authorName: string
  rating: number
}

export const BookDetailHeader: React.FC<Props> = ({
  categoryName,
  title,
  authorName,
  rating,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <Badge
        variant="secondary"
        className="w-fit rounded-sm px-3 text-sm font-bold border-neutral-300 bg-transparent"
      >
        {categoryName}
      </Badge>

        <h1 className="flex items-center h-7.5 text-display-sm font-bold tracking-tight text-neutral-950 sm:text-display-sm">
          {title}
        </h1>
        <p className="flex items-center h-7.5 text-md font-semibold text-neutral-700">{authorName}</p>

      <div className="flex items-center h-7.5  gap-2">
        <Star className="h-6 w-6 fill-yellow-500 text-yellow-500" />
        <span className="text-md font-bold text-foreground">
          {Number.isFinite(rating) ? rating.toFixed(1) : "-"}
        </span>
      </div>
    </div>
  )
}