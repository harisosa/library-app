import { EditBookComponent } from "@/features/books/components/EditBook"



type Props = {
    params: Promise<{ id: string }>
}

const Page = async ({ params }: Props) => {
      const { id } = await params
    const bookId = Number(id)

  return <EditBookComponent bookId={bookId} />
}

export default Page