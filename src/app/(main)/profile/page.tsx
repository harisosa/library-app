import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BorrowedList } from "@/features/loan/components/BorrowList";
import { Overview } from "@/features/profile/components";
import { MyReviews } from "@/features/review/components/MyReview";
import { Section } from "@/shared/components";


type Props = {
    searchParams?: {
        tab?: string;
    };
};

export default async function  ProfilePage({ searchParams }: Props) {
    const params = await searchParams;
    const tab = params?.tab ?? 'profile';

    return (
       <Section id='profile' >
           <Tabs defaultValue={tab}>
                <TabsList className="h-10 bg-muted p-1">
                    <TabsTrigger value="profile" className="px-6">
                        Profile
                    </TabsTrigger>
                    <TabsTrigger value="borrowed" className=" px-6">
                        Borrowed List
                    </TabsTrigger>
                    <TabsTrigger value="reviews" className="px-6">
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
       </Section>
 

    );
}