import { CategoriesResponse } from "@/features/category/types"
import { api } from "@/lib/http"

export const getCategories = async (): Promise<CategoriesResponse> => {
  return await api<CategoriesResponse>({
    method: "GET",
    url: "/categories",
  })
}