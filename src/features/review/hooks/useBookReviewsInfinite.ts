import { useInfiniteQuery } from "@tanstack/react-query";

import type { BookReviewsData } from "../types";
import { reviewsQueryKeys } from "@/features/review/queryKeys";
import { getBookReviews } from "@/features/review/api";

type Options = {
  bookId: number;
  limit?: number;
  enabled?: boolean;
};

export const useBookReviewsInfinite = ({
  bookId,
  limit = 10,
  enabled = true,
}: Options) => {
  return useInfiniteQuery<BookReviewsData>({
    queryKey: reviewsQueryKeys.byBookInfinite(bookId, limit),
    enabled: enabled && bookId > 0,
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getBookReviews({ bookId, page: Number(pageParam), limit }),
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.pagination;
      return page < totalPages ? page + 1 : undefined;
    },
  });
};