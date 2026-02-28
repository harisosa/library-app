
import { Author } from '@/features/author/types'
import { AuthorCard } from './AuthorCard'

type AuthorsListProps = {
  authors: Author[]
}

export const AuthorsList = ({ authors }: AuthorsListProps) => {
  return (
    <div
      className="
        grid gap-4
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      {authors.map((author) => (
        <AuthorCard key={author.id} author={author} />
      ))}
    </div>
  )
}