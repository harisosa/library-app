"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { useCategories } from "@/features/category/hooks/useCategories"
import { Section } from "@/shared/components/layout"
import { CardsSkeleton, CategoryCard } from "@/features/category/ui"

type CategoryPickerProps = {
  limit?: number
  onSelect?: (categoryId: number) => void
}

export const CategoryPicker: React.FC<CategoryPickerProps> = ({
  limit = 6,
  onSelect,
}) => {
  const { data, isLoading, isError } = useCategories()

  const categories = React.useMemo(() => {
    return (data?.categories ?? []).slice(0, limit)
  }, [data?.categories, limit])

  if (isLoading) {

    return <Section id='category-picker'> <CardsSkeleton count={limit} /> </Section> 
  }

  if (isError) {
    return (
      <Card className="p-4">
        <p className="text-sm text-muted-foreground">
          Failed to load categories. Please try again.
        </p>
      </Card>
    )
  }

  return (
    <Section id='category-picker'>
      <div className="w-full flex gap-3 lg:gap-4 flex-wrap">
        {categories.map((c) => (
          <CategoryCard
            key={c.id}
            id={c.id}
            name={c.name}
            onClick={onSelect}
          />
        ))}
      </div>
    </Section>
  )
}