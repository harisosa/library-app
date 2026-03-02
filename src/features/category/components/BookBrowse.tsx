"use client"

import { BookBrowseResult } from "@/features/books/components/BookBrowseResult"
import { useCategories } from "@/features/category/hooks/useCategories"
import { BookListFilter } from "@/features/category/ui/BookListFilter"
import { Section } from "@/shared/components"
import React, { useState } from "react"


type BookBrowseProps = {
  categoryId?: number;
  query?: string;
}

export const BookBrowse: React.FC<BookBrowseProps> = ({
  categoryId,
  query,
}) => {
  const { data , isLoading: isLoadingCategories } =
    useCategories()

 const categories = data?.categories ?? [];
 const [selectedCategoryIds, setSelectedCategoryIds] = React.useState<number[]>(
    () => (categoryId ? [categoryId] : [])
  )

  const [selectedRatings, setSelectedRatings] =
    React.useState<number[]>([])

  const onToggleCategory = React.useCallback((categoryId: number) => {
    setSelectedCategoryIds((prev) => {
      const next = new Set(prev)
      if (next.has(categoryId)) next.delete(categoryId)
      else next.add(categoryId)
      return Array.from(next)
    })
  }, [])

  const onToggleRating = React.useCallback((rating: number) => {
    setSelectedRatings((prev) => {
      const next = new Set(prev)
      if (next.has(rating)) next.delete(rating)
      else next.add(rating)
      return Array.from(next)
    })
  }, [])

  const filters = React.useMemo(
  () => ({
    q: query || undefined,
    categoryId: selectedCategoryIds[0],
    minRating: selectedRatings.length ? Math.min(...selectedRatings) : undefined,
  }),
  [query, selectedCategoryIds, selectedRatings]
)


  return (
    <Section id='book-list' title="Book List" className="lg:gap-8" >
    <div className="flex gap-6">
      <BookListFilter
        className="w-65 shrink-0"
        categories={categories}
        selectedCategoryIds={selectedCategoryIds}
        onToggleCategory={onToggleCategory}
        selectedRatings={selectedRatings}
        onToggleRating={onToggleRating}
        isLoading={isLoadingCategories}
      />

      <div className="flex-1">
          <BookBrowseResult filters={filters} />
      </div>
    </div>
    </Section>
  )
}