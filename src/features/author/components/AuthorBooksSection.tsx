"use client";

import { Separator } from "@/components/ui/separator";
import { useAuthorBooks } from "@/features/author/hooks/useAuthorBooks";
import { AuthorCard } from "@/features/author/ui";
import { AutrhorSectionSkeleton } from "@/features/author/ui/AuthorSectionSkeleton";
import { BookCard } from "@/features/books/ui";

import { Section } from "@/shared/components";
import React from "react";

type Props = {
  authorId: number;
};

export const AuthorBooksSection: React.FC<Props> = ({ authorId }) => {
  const page = 1;
  const limit = 6;
  const q = useAuthorBooks(authorId, page, limit);
  if (q.isLoading) {
    return <AutrhorSectionSkeleton />
  }

  if (q.isError || !q.data) {
    return <div className="text-sm text-destructive">Failed to load author.</div>;
  }

  return (
    <Section id='author'>
      <AuthorCard author={q.data.author} className="lg:w-full" bookCount={q.data.bookCount} />
      <Separator className="w-full" />
      <h2 className="text-display-lg font-bold">Book List</h2>
      <div className="flex lg:gap-5 gap-4 flex-wrap">
      {q.data.books.map((b) => (
        <BookCard key={b.id} book={b} />
      ))}
      </div>

    </Section>
  )

};