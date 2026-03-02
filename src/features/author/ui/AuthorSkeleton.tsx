import { Section } from "@/shared/components/layout"


export const SkeletonCard = () => {
  return (
    <div
      className="
        flex items-center gap-4
        rounded-2xl bg-white
        px-5 py-4
        shadow-[0_8px_30px_rgba(0,0,0,0.06)]
      "
    >
      <div className="size-16 rounded-full bg-neutral-200 animate-pulse" />
      <div className="flex-1">
        <div className="h-4 w-40 rounded bg-neutral-200 animate-pulse" />
        <div className="mt-3 h-4 w-28 rounded bg-neutral-200 animate-pulse" />
      </div>
    </div>
  )
}

export const AuthorsSkeleton = () => {
  return (
    <Section id="popular-author-skeleton" title="Popular Author">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    </Section>
  )
}