import { Separator } from "@/components/ui/separator";
import { PopularAuthors } from "@/features/author/components/PopularAuthors";
import { RecommendationSection } from "@/features/books/components";
import { CategoryPicker } from "@/features/category/components";
import { Hero } from "@/features/home/components";
import { Container } from "@/shared/components/layout";

export default function MainPage() {
    return (
        <div className="pt-20 flex flex-col gap-12">
            <Hero />
            <CategoryPicker limit={6} />
            <RecommendationSection />
            <Container > 
            <Separator className="w-full" />
            </Container>
            
            <PopularAuthors />
        </div>

    )
}