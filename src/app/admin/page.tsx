import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Section } from "@/shared/components";
import { UserComponent } from "@/features/user/components/User";
import { AdminBookListPage } from "@/features/books/components/AdminBookListPage";
import { AdminBorrowedList } from "@/features/loan/components";


type Props = {
  searchParams?: {
    tab?: string;
  };
};

export default async function AdminPage({ searchParams }: Props) {
  const params = await searchParams;
  const tab = params?.tab ?? "users";

  return (
    <Section id='admin'>
      <Tabs defaultValue={tab}>
        <TabsList className="h-10  bg-muted p-1 w-full md:w-150">
          <TabsTrigger value="borrowed" className="px-6">
            Borrowed List
          </TabsTrigger>

          <TabsTrigger value="users" className="px-6">
            User
          </TabsTrigger>

          <TabsTrigger value="books" className="px-6">
            Book List
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="mt-8">
            <UserComponent />
        </TabsContent>

        <TabsContent value="books" className="mt-8">
          <AdminBookListPage />
        </TabsContent>

        <TabsContent value="borrowed" className="mt-8">
          <AdminBorrowedList />
        </TabsContent>
      </Tabs>
    </Section>
  );
}