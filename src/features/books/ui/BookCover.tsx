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
  fit?: "cover" | "contain"
}

export const BookCover: React.FC<BookCoverProps> = ({
  src,
  alt,
  className,
  priority,
  fit = "cover",
}) => {
  const normalized = normalizeCoverImageSrc(src)
  const isData = normalized?.startsWith("data:image/")
  const objectClass = fit === "cover" ? "object-cover" : "object-contain"

  return (
    <Image
      src={normalized ?? ''}
      alt={alt}
      fill
      priority={priority}
      unoptimized={isData}
      className={cn(objectClass, className)}
    />
  )
}