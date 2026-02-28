
import { api } from '@/lib/http'
import type { PopularAuthorsResult } from '../types'

export const getPopularAuthors = async (
  limit: number = 10
): Promise<PopularAuthorsResult> => {
  return await api<PopularAuthorsResult>({
    method: 'GET',
    url: `/authors/popular?limit=${limit}`,
  })
}