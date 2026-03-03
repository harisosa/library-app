import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BorrowedList } from "@/features/loan/components/BorrowList";
import { Overview } from "@/features/profile/components";
import { MyReviews } from "@/features/review/components/MyReview";


type Props = {
    searchParams?: {
        tab?: string;
    };
};

export default async function  ProfilePage({ searchParams }: Props) {
    const params = await searchParams;
    const tab = params?.tab ?? 'profile';

    return (
        <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
            <Tabs defaultValue={tab}>
                <TabsList className="h-10 rounded-full bg-muted p-1">
                    <TabsTrigger value="profile" className="rounded-full px-6">
                        Profile
                    </TabsTrigger>
                    <TabsTrigger value="borrowed" className="rounded-full px-6">
                        Borrowed List
                    </TabsTrigger>
                    <TabsTrigger value="reviews" className="rounded-full px-6">
                        Reviews
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="profile" className="mt-8">
                    <Overview />
                </TabsContent>

                <TabsContent value="borrowed" className="mt-8">
                    <BorrowedList />
                </TabsContent>

                <TabsContent value="reviews" className="mt-8">
                    <MyReviews />
                </TabsContent>
            </Tabs>
        </div>
    );
}