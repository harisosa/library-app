import { SkeletonCard } from "@/features/author/ui/AuthorSkeleton"
import { BookGridSkeleton } from "@/features/books/ui/skeleton/BookGridSkeleton"
import { Section } from "@/shared/components/layout"



export const AutrhorSectionSkeleton = () => {
  return (
    <Section id="author-skeleton">
          <SkeletonCard/>
            <h2 className="text-2xl font-bold">Book List</h2>
            <BookGridSkeleton />
    </Section>
  )
}