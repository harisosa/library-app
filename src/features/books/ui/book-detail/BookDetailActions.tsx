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
    <>
      <div
        className={cn(
          `
          fixed inset-x-0 bottom-0 z-50
          border-t bg-background
          p-4
          pb-[calc(env(safe-area-inset-bottom)+16px)]
          md:hidden
        `,
          className
        )}
      >
        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            className="h-10 flex-1 rounded-full px-6"
            onClick={onAddToCart}
          >
            Add to Cart
          </Button>

          <Button
            type="button"
            className="h-10 flex-1 rounded-full px-7"
            onClick={onBorrow}
            disabled={disabledBorrow}
          >
            Borrow Book
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "mt-6 hidden flex-wrap items-center gap-3 md:flex",
          className
        )}
      >
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
    </>
  )
}