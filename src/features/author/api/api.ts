
import { api } from '@/lib/http'
import type { AuthorBooksResponse, GetAuthorBooksParams, PopularAuthorsResult } from '../types'

export const getPopularAuthors = async (
  limit: number = 10
): Promise<PopularAuthorsResult> => {
  return await api<PopularAuthorsResult>({
    method: 'GET',
    url: `/authors/popular?limit=${limit}`,
  })
}


export const getAuthorBooks = async ({
  authorId,
  page,
  limit,
}: GetAuthorBooksParams): Promise<AuthorBooksResponse> => {
  return await api<AuthorBooksResponse>
  ({
    method: 'GET',
    url: `/authors/${authorId}/books?page=${page}&limit=${limit}`,
  })

};