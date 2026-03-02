import { Separator } from "@/components/ui/separator"

import { BookCarousel, BookDetailContainer } from "@/features/books/components"
import { BookReviews } from "@/features/review/components"
import { Container } from "@/shared/components"

type Props = {
    params: Promise<{ id: string }>
}

const Page = async ({ params }: Props) => {
    const { id } = await params
    const bookId = Number(id)

    if (!Number.isFinite(bookId) || bookId <= 0) return null

    return (
        <div className="pt-32 flex flex-col gap-16">
            <BookDetailContainer bookId={bookId} />
            <Container>
                <Separator className="w-full" />
            </Container>

            <BookReviews bookId={bookId} />
            <Container>
                <Separator className="w-full" />
            </Container>
            <BookCarousel id="related" title="Related Books" by="popular" limit={5} isLoadMore={false} containerClassname="flex lg:gap-10 mb-[118px]" />
        </div>
    )
}

export default Page