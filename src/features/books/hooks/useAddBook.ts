'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { booksQueryKeys } from '../queryKeys'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { addBook } from '@/features/books/api'

export const useAddBook = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: addBook,

    onSuccess: () => {
      toast.success('Book created successfully')

      queryClient.invalidateQueries({
        queryKey: booksQueryKeys.all,
      })

      router.push('/admin?tab=books')
    },

    onError: () => {
      toast.error('Failed to create book')
    },
  })
}