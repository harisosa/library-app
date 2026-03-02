import {
  Avatar,
  AvatarImage,
} from '@/components/ui/avatar'
import { Author } from '@/features/author/types'
import { cn } from '@/lib/utils';
import Image from 'next/image'

type AuthorCardProps = {
  author: Author,
  onClick?: (id: number) => void;
  className?: string;
  bookCount?: number;
}


export const AuthorCard = ({ author, onClick, className, bookCount }: AuthorCardProps) => {
  const count = author.bookCount ?? bookCount;
  const bookLabel = count === 1 ? 'book' : 'books'

  return (
    <div
      className=
      {
        cn("flex items-center gap-4",
          "rounded-2xl bg-white",
          "shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
          "w-full h-21 p-4 lg:h-28.25 lg:w-71.25"
          , className)
      }

      onClick={() => onClick && onClick(author.id)}
    >

      <Avatar className="size-15 lg:size-20.25 shrink-0">
        <AvatarImage src="/images/profile.svg" alt={author.name} />
      </Avatar>

      <div className="min-w-0">
        <div className="truncate text-lg font-bold text-neutral-900">
          {author.name}
        </div>

        <div className="mt-2 flex items-center gap-2">
          <div className="relative w-4 h-5">
            <Image src="/icons/book.svg" fill alt="book" />
          </div>

          <span className="whitespace-nowrap text-md font-medium text-neutral-950">
            {count} {bookLabel}
          </span>
        </div>
      </div>
    </div>
  )
}