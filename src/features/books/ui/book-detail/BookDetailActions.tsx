import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useAddCartItem } from "@/features/cart/hooks/useAddCartItem";
import { useRouter } from "next/navigation";
import { useIsBookInCart } from "@/features/cart/hooks";

type BookDetailActionsProps = {
  bookId: number;
  className?: string;
  isAvailable?: boolean;
}

export const BookDetailActions: React.FC<BookDetailActionsProps> = ({
  bookId,
  className,
  isAvailable
}) => {


  const router = useRouter();
  const {mutateAsync, isPending} = useAddCartItem();

  const inCart = useIsBookInCart(bookId);
  if (inCart.data === true) return <div className="w-full p-1 bg-muted  mt-3 text-center"><span>Book already in cart</span></div>;

  if(!isAvailable) return <div className="w-full p-1 bg-muted  mt-3 text-center"><span>No Available copy</span></div>;

  const disabled = isPending || inCart.isLoading;

  const onAddToCart = () => {
    mutateAsync({bookId})
  };

  const onBorrow = () => {
          router.push("/cart");
  }

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
            disabled={disabled}
          >
            {disabled ? "Adding..." : "Add to cart"}
          </Button>

          <Button
            type="button"
            className="h-10 flex-1 rounded-full px-7"
            onClick={onBorrow}
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
          disabled={disabled}
        >
          {disabled ? "Adding..." : "Add to cart"}
        </Button>

        <Button
          type="button"
          className="h-10 rounded-full px-7"
          onClick={onBorrow}
        >
          Borrow Book
        </Button>
      </div>
    </>
  )
}