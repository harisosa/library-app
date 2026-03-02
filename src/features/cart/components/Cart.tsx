"use client";

import React, { useMemo, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart, useDeleteCartItem } from "@/features/cart/hooks";
import { BorrowItem, CartSkeleton, LoanSummary } from "@/features/cart/ui";
import { CartError } from "@/features/cart/ui/CartError";
import { Section } from "@/shared/components";
import type { CartItem } from "@/features/cart/types";
import { useRouter } from "next/navigation";
type CartItemId = CartItem["id"];

export const CartComponent: React.FC = () => {
  const q = useCart();
  const m = useDeleteCartItem();

  const router = useRouter();

  const items = useMemo(() => q.data?.items ?? [], [q.data])

  const allIds = useMemo<CartItemId[]>(() => items.map((x) => x.id), [items]);
  const allIdsSet = useMemo(() => new Set<CartItemId>(allIds), [allIds]);

  const [selectedIds, setSelectedIds] = useState<Set<CartItemId>>(() => new Set());

  const selectedIdsValid = useMemo(() => {
    const next = new Set<CartItemId>();
    for (const id of selectedIds) if (allIdsSet.has(id)) next.add(id);
    return next;
  }, [selectedIds, allIdsSet]);

  const selectedCount = selectedIdsValid.size;

  const isAllSelected =
    allIds.length > 0 && allIds.every((id) => selectedIdsValid.has(id));

  const toggleOne = (id: CartItemId, checked: boolean) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  const onRemoveItem = (id : number) =>{
    m.mutateAsync(id)
  }

  const toggleAll = (checked: boolean) => {
    setSelectedIds(checked ? new Set(allIds) : new Set());
  };

  if (q.isLoading) return <CartSkeleton />;
  if (q.isError) return <CartError onRetry={q.refetch} />;


  return (
    <Section id="cart" title="My Cart">
      <div className="flex gap-10">
        <div className="flex-1">
          <div className="flex items-center gap-3 pb-4">
            <Checkbox
              checked={isAllSelected}
              onCheckedChange={(v) => toggleAll(Boolean(v))}
              aria-label="Select all items"
            />
            <span className="text-sm">Select All</span>
          </div>

          <div className="space-y-0">
            {items.map((it) => (
              <BorrowItem
                key={it.id}
                item={it}
                checked={selectedIdsValid.has(it.id)}
                onCheckedChange={(checked) => toggleOne(it.id, checked)}
                onRemove={() => onRemoveItem(it.id)}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-90">
          <LoanSummary total={selectedCount} onBorrow={() => {router.push('/checkout') }} />
        </div>
      </div>
    </Section>
  );
};