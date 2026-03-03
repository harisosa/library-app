import { BookPreview } from "@/features/books/components/BookPreview"
import React from "react"


type Props = {
    params: Promise<{ id: string }>
}

const Page = async ({ params }: Props) => {
      const { id } = await params
    const bookId = Number(id)

  return <BookPreview bookId={bookId} />
}

export default Page