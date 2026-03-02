import * as React from "react"
import { cn } from "@/lib/utils"

type Props = {
  description: string
  className?: string
}

export const BookDetailDescription: React.FC<Props> = ({ description, className }) => {
  return (
    <div className={cn("mt-6", className)}>
      <h2 className="text-xl font-bold text-neutral-950">Description</h2>
      <p className="mt-2 text-md leading-relaxed text-neutral-950 ">
        {description}
      </p>
    </div>
  )
}