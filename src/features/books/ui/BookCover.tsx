// src/features/books/ui/BookCover.tsx
"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { normalizeCoverImageSrc } from "@/features/books/utils"

type BookCoverProps = {
  src?: string | null
  alt: string
  className?: string
  priority?: boolean
}

export const BookCover: React.FC<BookCoverProps> = ({ src, alt, className, priority }) => {
  const normalized = normalizeCoverImageSrc(src)

  if (!normalized) {
    return (
      <div
        className={cn(
          "grid place-items-center rounded-2xl bg-muted text-xs text-muted-foreground",
          className,
        )}
        aria-label={`${alt} cover placeholder`}
      >
        No Cover
      </div>
    )
  }

  const isData = normalized.startsWith("data:image/")

  return (
    <Image
      src={normalized}
      alt={alt}
      fill
      priority={priority}
      unoptimized={isData}
      className={cn("rounded-2xl object-cover", className)}
    />
  )
}