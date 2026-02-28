export type Category = {
  id: number
  name: string
  createdAt: string // ISO date string
  updatedAt: string // ISO date string
}

export type CategoriesResponse = {
  categories: Category[]
}