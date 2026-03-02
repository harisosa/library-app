"use client";

import { getAuthorBooks } from "@/features/author/api";
import { authorsQueryKeys } from "@/features/author/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useAuthorBooks = (authorId: number, page: number, limit: number) => {
  return useQuery({
    queryKey: authorsQueryKeys.books(authorId, page, limit),
    queryFn: () => getAuthorBooks({ authorId, page, limit }),
  });
};