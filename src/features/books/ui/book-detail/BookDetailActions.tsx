import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Props = {
  onAddToCart?: () => void
  onBorrow?: () => void
  disabledBorrow?: boolean
  className?: string
}

export const BookDetailActions: React.FC<Props> = ({
  onAddToCart,
  onBorrow,
  disabledBorrow,
  className,
}) => {
  return (
    <div className={cn("mt-6 flex flex-wrap items-center gap-3", className)}>
      <Button
        type="button"
        variant="outline"
        className="h-10 rounded-full px-6"
        onClick={onAddToCart}
      >
        Add to Cart
      </Button>

      <Button
        type="button"
        className="h-10 rounded-full px-7"
        onClick={onBorrow}
        disabled={disabledBorrow}
      >
        Borrow Book
      </Button>
    </div>
  )
}