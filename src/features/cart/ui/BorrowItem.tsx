import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CartItem } from "@/features/cart/types";

type Props = {
  item: CartItem;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  onRemove?: (itemId: number) => void;
};

export const BorrowItem: React.FC<Props> = ({
  item,
  checked,
  onCheckedChange,
  onRemove,
}) => {
  const itemDetail = item.book;

  return (
    <div className="flex items-start gap-4 py-6 border-b">
      <Checkbox
        className="mt-1"
        checked={checked}
        onCheckedChange={(v) => onCheckedChange(Boolean(v))}
        aria-label={`Select ${itemDetail?.title ?? "book"}`}
      />

      <div className="relative h-23 w-18 rounded-md overflow-hidden bg-muted">
        {itemDetail?.coverImage && (
          <Image
            src={itemDetail.coverImage}
            alt={itemDetail.title ?? "Book"}
            fill
            className="object-cover"
          />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="inline-flex rounded-md border px-2 py-1 text-xs">
          {itemDetail?.category.name ?? "Category"}
        </div>

        <div className="mt-2 text-base font-semibold truncate">
          {itemDetail?.title ?? "Book Name"}
        </div>

        <div className="mt-1 text-sm text-muted-foreground">
          {itemDetail?.author.name ?? "Author name"}
        </div>
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => onRemove && onRemove(item.id)}
      >
        Remove
      </Button>
    </div>
  );
};