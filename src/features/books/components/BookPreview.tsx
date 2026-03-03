"use client"

import * as React from "react"
import { useBookDetail } from "@/features/books/hooks"
import { BookDetail } from "@/features/books/ui/BookDetail"
import { BookDetailSkeleton } from "@/features/books/ui/skeleton"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Container } from "@/shared/components"


type Props = {
    bookId: number
}

export const BookPreview: React.FC<Props> = ({ bookId }) => {
    const { data, isLoading, isError } = useBookDetail(bookId)
    const router = useRouter()
    if (isLoading) {
        return <BookDetailSkeleton />
    }

    if (isError || !data) {
        return (
            <div className="text-sm text-destructive">
                Failed to load book detail.
            </div>
        )
    }

    const model = {
        id: data.id,
        title: data.title,
        availableCopies: data.availableCopies,
        authorName: data.author?.name ?? "-",
        categoryName: data.category?.name ?? "-",
        rating: data.rating ?? 0,
        pages: data.totalCopies ?? 0,
        ratingCount: data.reviewCount ?? 0,
        reviewsCount: data.reviews?.length ?? 0,
        description: data.description ?? "",
        coverImage: data.coverImage,
    }



    return (
        <>
            <Container>
                <Button
                    variant="ghost"
                    className="w-fit gap-2 rounded-full"
                    onClick={() => router.push("/admin?tab=books")}
                >
                    <ArrowLeft size={16} />
                    Back
                </Button>
            </Container>
            <BookDetail
                data={model}
                isPreview
            />
        </>


    )
}