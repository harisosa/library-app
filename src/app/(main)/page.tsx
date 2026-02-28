import { Separator } from "@/components/ui/separator";
import { RecommendationSection } from "@/features/books/components";
import { CategoryPicker } from "@/features/category/components";
import { Hero } from "@/features/home/components";

export default function MainPage() {
    return (
        <div className="pt-20 flex flex-col gap-12">
            <Hero />
            <CategoryPicker limit={6} />
            <RecommendationSection />
            <Separator className="w-full" />

        </div>

    )
}