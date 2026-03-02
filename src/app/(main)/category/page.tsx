import { BookBrowse } from "@/features/category/components/BookBrowse"
import React from "react"

type PageProps = {
    searchParams?: {
        q?: string
        categoryId?: string
    }
}

const CategoryPage: React.FC<PageProps> = async ({ searchParams }) => {
  const sp = await searchParams

  const q = sp?.q
  const categoryId = sp?.categoryId ? Number(sp.categoryId) : undefined
    return (
        <div className="pt-32">
            <BookBrowse
                query={q}
                categoryId={categoryId}
            />
        </div>

    )
}

export default CategoryPage