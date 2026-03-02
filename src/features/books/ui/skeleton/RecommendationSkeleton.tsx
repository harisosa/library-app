import * as React from "react"
import { Section } from "@/shared/components/layout"
import { BookGridSkeleton } from "@/features/books/ui/skeleton/BookGridSkeleton"

export const RecommendationSkeleton: React.FC = () => {
  return (
    <Section id="recommendation" title="Recommendation">
      <BookGridSkeleton />
    </Section>
  )
}