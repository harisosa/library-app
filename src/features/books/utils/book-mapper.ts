import { BookDetail, BookUpsertValues, CreateBookFormDataFields } from "@/features/books/types";

export const toUpsertValues = (book: BookDetail): BookUpsertValues => ({
  title: book.title,
  description: book.description,
  isbn: book.isbn,
  publishedYear: book.publishedYear,
  authorId: book.authorId,
  authorName: book.author?.name ?? "",
  categoryId: book.categoryId,

  totalCopies: book.totalCopies,
  availableCopies: book.availableCopies,

  coverFile: null,
  coverPreviewUrl: null,
  coverImageUrl: book.coverImage ?? null,
});


export const toCreatePayload = (v: BookUpsertValues): CreateBookFormDataFields => ({
  title: v.title.trim(),
  description: v.description.trim(),
  isbn: v.isbn.trim(),
  publishedYear: v.publishedYear,

  authorId: v.authorId,
  authorName: v.authorName.trim(),

  categoryId: v.categoryId,

  totalCopies: v.totalCopies,
  availableCopies: v.availableCopies,
  coverImage: v.coverFile,
});

export const getBookUpsertInitValue = (): BookUpsertValues => ({
  title: "",
  description: "",
  isbn: "",
  publishedYear: new Date().getFullYear(),

  authorId: 0,
  authorName: "",

  categoryId: 0,
  totalCopies: 1,
  availableCopies: 1,

  coverFile: null,
  coverPreviewUrl: null,
  coverImageUrl: null,
});
