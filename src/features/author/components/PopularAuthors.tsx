'use client'


import { usePopularAuthors } from '@/features/author/hooks/usePopularAuthors'
import { AuthorsError, AuthorsList, AuthorsSkeleton } from '@/features/author/ui'
import { Section } from '@/shared/components/layout'


export const PopularAuthors = () => {
    const {data, isLoading,isError,refetch } = usePopularAuthors(4)

  if (isLoading) return <AuthorsSkeleton />
  if (isError || !data) return <AuthorsError onRetry={() => refetch()} />

  return (
    <Section id="popular-authors" title="Popular Authors" className="mb-29">
      <AuthorsList authors={data.authors} />
    </Section>
  )
}