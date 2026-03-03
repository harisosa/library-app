"use client";

import React from "react";
import type { BookUpsertValues } from "@/features/books/types";
import { useCategories } from "@/features/category/hooks/useCategories";
import { BookUpsertForm } from "@/features/books/ui/upset-book";
import { getBookUpsertInitValue, toCreatePayload } from "@/features/books/utils/book-mapper";
import { useAddBook } from "@/features/books/hooks/useAddBook";
import { Section } from "@/shared/components";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";




export const AddBookComponent: React.FC = () => {
  const router = useRouter();
  const categoriesQ = useCategories();
  const createBookM = useAddBook();

  const onSubmit = async (values: BookUpsertValues) => {
    const payload = toCreatePayload(values);
    await createBookM.mutateAsync(payload);
  };

  return (
    <Section id='add-book' contentClassName="lg:gap-0">
      <div className="flex items-center  md:w-150 md:mx-auto mb-4">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => router.push('/admin?tab=books')}
        >
          <ArrowLeft className="size-7" />

        </Button>
        <h2 className="text-display-xs font-bold">Add Book</h2>
      </div>
      <BookUpsertForm
        initialValues={getBookUpsertInitValue()}
        categories={categoriesQ.data?.categories ?? []}
        disabled={categoriesQ.isLoading}
        onSubmit={onSubmit}
      />
    </Section>

  );
};