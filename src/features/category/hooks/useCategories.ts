

import { useQuery } from "@tanstack/react-query"
import { categoriesQueryKeys } from "../queryKeys"
import { getCategories } from "@/features/category/api"

export const useCategories = () => {
  return useQuery({
    queryKey: categoriesQueryKeys.list(),
    queryFn: getCategories,
    staleTime: 5 * 60 * 1000,
  })
}