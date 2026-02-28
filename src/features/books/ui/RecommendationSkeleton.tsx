// src/features/home/ui/recommendation/RecommendationSection.skeleton.tsx
import * as React from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Section } from "@/shared/components/layout"

type Props = { className?: string }

export const RecommendationSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <Section className={className}>
      <div className="h-7 w-52 rounded-md bg-muted" />

      <div
        className={cn(
          "grid justify-between",
          "grid-cols-2 gap-x-4 gap-y-6",
          "md:grid-cols-3",
          "lg:grid-cols-4",
          "xl:grid-cols-5",
        )}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <Card
            key={i}
            className={cn(
              "border-none bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] overflow-hidden",
              "w-43 h-92.5 xl:w-56 xl:h-117",
            )}
          >
            <div className="w-43 h-64.5 xl:w-56 xl:h-84 bg-muted" />
            <div className="p-4 space-y-3">
              <div className="h-4 w-3/4 rounded bg-muted" />
              <div className="h-3 w-1/2 rounded bg-muted" />
              <div className="h-4 w-10 rounded bg-muted" />
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="h-10 w-40 rounded-full bg-muted" />
      </div>
    </Section>
  )
}