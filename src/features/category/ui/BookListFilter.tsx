import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { Category } from "@/features/category/types"
import { Star } from "lucide-react"


type BookListFilterProps = {
  categories: Category[]
  selectedCategoryIds: number[]
  onToggleCategory: (categoryId: number) => void
  selectedRatings: number[]
  onToggleRating: (rating: number) => void
  isLoading?: boolean
  className?: string
}

const RATINGS: number[] = [5, 4, 3, 2, 1]

export const BookListFilter: React.FC<BookListFilterProps> = ({
  categories,
  selectedCategoryIds,
  onToggleCategory,
  selectedRatings,
  onToggleRating,
  isLoading,
  className,
}) => {
  return (
    <aside
      className={cn("rounded-xl border bg-background p-5 shadow-[0_0_20px_0px_#CBCACA40] h-166", className)}
      aria-label="Book filters"
    >
      <p className="text-md font-bold uppercase tracking-wide ">
        Filter
      </p>

      <div className="mt-4">
        <h3 className="text-lg font-bold">Category</h3>

        <div className="mt-3 space-y-3">
          {isLoading ? (
            <p className="text-sm text-muted-foreground">Loading categories…</p>
          ) : categories.length === 0 ? (
            <p className="text-sm text-muted-foreground">No categories</p>
          ) : (
            categories.map((c) => {
              const checked = selectedCategoryIds.includes(c.id)
              return (
                <label
                  key={c.id}
                  className="flex cursor-pointer items-center gap-3 text-sm"
                >
                  <Checkbox
                    checked={checked}
                    onCheckedChange={() => onToggleCategory(c.id)}
                    aria-label={`Filter by category ${c.name}`}
                  />
                  <span className="leading-none text-md font-medium">{c.name}</span>
                </label>
              )
            })
          )}
        </div>
      </div>

      <Separator className="my-6" />

      <div>
        <h3 className="text-lg font-bold">Rating</h3>

        <div className="mt-3 space-y-3">
          {RATINGS.map((r) => {
            const checked = selectedRatings.includes(r)
            return (
              <label
                key={r}
                className="flex cursor-pointer items-center gap-3 text-sm"
              >
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
            )
          })}
        </div>
      </div>
    </aside>
  )
}
