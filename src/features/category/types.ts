export type Category = {
  id: number
  name: string
  createdAt: string
  updatedAt: string
}

export type CategoriesResponse = {
  categories: Category[]
}