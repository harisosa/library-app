"use client";

import React from "react";
import type { BookUpsertValues } from "@/features/books/types";

import { useCategories } from "@/features/category/hooks/useCategories";

import { toast } from "sonner";
import { BookUpsertForm } from "@/features/books/ui/upset-book";
import { getBookUpsertInitValue, toCreatePayload } from "@/features/books/utils/book-mapper";




export const CreateBookSection: React.FC = () => {
  const categoriesQ = useCategories();
  //const createBookM = useCreateBook();

  const onSubmit = async (values: BookUpsertValues) => {
    const payload = toCreatePayload(values);
    //await createBookM.mutateAsync({ payload }); // sesuaikan signature hook kamu
    toast.success("Book created");
  };

  return (
    <BookUpsertForm
      initialValues={getBookUpsertInitValue()}
      categories={categoriesQ.data?.categories ?? []}
      disabled={categoriesQ.isLoading}
      onSubmit={onSubmit}
    />
  );
};