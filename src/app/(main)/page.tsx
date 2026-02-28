import { CategoryPicker } from "@/features/category/components";
import { Hero } from "@/features/home/components";

export default function MainPage() {
    return (
        <>
            <Hero />
            <CategoryPicker limit={6} />
        </>

    )
}