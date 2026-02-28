"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useCategories } from "@/features/category/hooks/useCategories"
import { CardsSkeleton } from "@/features/category/components/CardSkeleton"
import { CategoryCard } from "@/features/category/components/CategoryCard"
import { Section } from "@/shared/components/layout"

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

    return <Section> <CardsSkeleton count={limit} /> </Section> 
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
    <Section>
      <div className="w-full flex gap-4 flex-wrap">
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