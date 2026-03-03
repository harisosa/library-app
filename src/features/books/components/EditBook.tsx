"use client";

import React from "react";

import type {  BookUpsertValues } from "@/features/books/types";

import { useCategories } from "@/features/category/hooks/useCategories";

import { BookUpsertForm } from "@/features/books/ui/upset-book";
import { useUpdateBook } from "@/features/books/hooks/useEditBook";
import { useBookDetail } from "@/features/books/hooks";
import { toUpsertValues } from "@/features/books/utils/book-mapper";
import { Section } from "@/shared/components";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { BookUpsertFormSkeleton } from "@/features/books/ui/upset-book/BookUpsertFormSkeleton";
import { Button } from "@/components/ui/button";


export const EditBookComponent: React.FC<{ bookId: number }> = ({ bookId }) => {
    const router = useRouter();
    const { data: book, isLoading } = useBookDetail(bookId);
    const categoriesQ = useCategories();
    const updateBookM = useUpdateBook();

    const onSubmit = async (values: BookUpsertValues) => {
        await updateBookM.mutateAsync({ id: book?.id ?? 0, payload: values });
        router.back()
    };


    if(isLoading || !book)return <BookUpsertFormSkeleton />
    const initValue = toUpsertValues(book)


    return (
        <Section id='edit-book' contentClassName="lg:gap-0">
            <div className="flex items-center  md:w-150 md:mx-auto mb-4">
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => router.back()}
                >
                    <ArrowLeft className="size-7" />

                </Button>
                      <h2 className="text-display-xs font-bold">Edit Book</h2>              
            </div>
            <BookUpsertForm
                initialValues={initValue}
                categories={categoriesQ.data?.categories ?? []}
                disabled={categoriesQ.isLoading || updateBookM.isPending}
                onSubmit={onSubmit}
            />
        </Section>

    );
};



