export interface Author {
  id: number
  name: string
  bio: string | null
  bookCount: number
  accumulatedScore: number
}

export interface PopularAuthorsResult {
  authors: Author[]
}