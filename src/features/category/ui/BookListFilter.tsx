"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Category } from "@/features/category/types";
import { SlidersHorizontal, Star } from "lucide-react";

type BookListFilterProps = {
  categories: Category[];
  selectedCategoryIds: number[];
  onToggleCategory: (categoryId: number) => void;
  selectedRatings: number[];
  onToggleRating: (rating: number) => void;
  isLoading?: boolean;
  className?: string;
};

const RATINGS: number[] = [5, 4, 3, 2, 1];

type FilterContentProps = Omit<BookListFilterProps, "className">;

const FilterContent: React.FC<FilterContentProps> = ({
  categories,
  selectedCategoryIds,
  onToggleCategory,
  selectedRatings,
  onToggleRating,
  isLoading,
}) => {
  return (
    <div aria-label="Book filters">
      <div>
        <h3 className="text-lg font-bold">Category</h3>

        <div className="mt-3 space-y-3">
          {isLoading ? (
            <p className="text-sm text-muted-foreground">Loading categories…</p>
          ) : categories.length === 0 ? (
            <p className="text-sm text-muted-foreground">No categories</p>
          ) : (
            categories.map((c) => {
              const checked = selectedCategoryIds.includes(c.id);
              return (
                <label
                  key={c.id}
                  className="flex cursor-pointer items-center gap-3"
                >
                  <Checkbox
                    checked={checked}
                    onCheckedChange={() => onToggleCategory(c.id)}
                    aria-label={`Filter by category ${c.name}`}
                  />
                  <span className="text-md font-medium leading-none">
                    {c.name}
                  </span>
                </label>
              );
            })
          )}
        </div>
      </div>

      <Separator className="my-6" />

      <div>
        <h3 className="text-lg font-bold">Rating</h3>

        <div className="mt-3 space-y-3">
          {RATINGS.map((r) => {
            const checked = selectedRatings.includes(r);
            return (
              <label key={r} className="flex cursor-pointer items-center gap-3">
                <Checkbox
                  checked={checked}
                  onCheckedChange={() => onToggleRating(r)}
                  aria-label={`Filter by rating ${r} stars`}
                />

                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-current text-amber-500" />
                  <span className="text-md font-medium">{r}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const BookListFilter: React.FC<BookListFilterProps> = ({
  categories,
  selectedCategoryIds,
  onToggleCategory,
  selectedRatings,
  onToggleRating,
  isLoading,
  className,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Mobile: trigger bar + sheet */}
      <div className={cn("lg:hidden", className)}>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="outline"
              className={cn(
                "w-full justify-between",
                "h-12 rounded-xl px-4",
                "border-muted-foreground/20 bg-background",
                "shadow-[0_0_20px_0px_#CBCACA40]"
              )}
            >
              <span className="text-sm font-semibold tracking-wide uppercase">
                Filter
              </span>
              <SlidersHorizontal className="h-5 w-5" aria-hidden="true" />
            </Button>
          </SheetTrigger>

          <SheetContent side="bottom" className="rounded-t-2xl px-6">
            <SheetHeader className="mb-4">
              <SheetTitle className="text-lg font-bold">Filter</SheetTitle>
            </SheetHeader>

            <div className="max-h-[70vh] overflow-auto pb-2">
              <FilterContent
                categories={categories}
                selectedCategoryIds={selectedCategoryIds}
                onToggleCategory={onToggleCategory}
                selectedRatings={selectedRatings}
                onToggleRating={onToggleRating}
                isLoading={isLoading}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop: sidebar filter */}
      <aside
        className={cn(
          "hidden lg:block",
          "rounded-xl border bg-background p-5 shadow-[0_0_20px_0px_#CBCACA40]",
          className
        )}
        aria-label="Book filters"
      >
        <p className="text-md font-bold uppercase tracking-wide">Filter</p>

        <div className="mt-4">
          <FilterContent
            categories={categories}
            selectedCategoryIds={selectedCategoryIds}
            onToggleCategory={onToggleCategory}
            selectedRatings={selectedRatings}
            onToggleRating={onToggleRating}
            isLoading={isLoading}
          />
        </div>
      </aside>
    </>
  );
};