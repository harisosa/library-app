'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { booksQueryKeys } from '../queryKeys'
import { deleteBook } from '@/features/books/api'

export const useDeleteBook = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteBook,

    onSuccess: () => {
      toast.success('Book deleted successfully')

      queryClient.invalidateQueries({
        queryKey: booksQueryKeys.all,
      })

    },

    onError: (err) => {
      toast.error(err.message)
    },
  })
}