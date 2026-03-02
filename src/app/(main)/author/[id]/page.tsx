import { AuthorBooksSection } from "@/features/author/components/AuthorBooksSection";

type Props = {
    params: Promise<{ id: number }>;
};

const Page = async ({ params }: Props) => {
    const { id } = await params;
    return (<div className="pt-32 flex flex-col gap-16">
        <AuthorBooksSection authorId={id} />;
    </div>)
};

export default Page;