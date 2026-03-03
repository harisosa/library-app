'use client'

import { returnLoan } from '@/features/loan/api'
import { loansKeys } from '@/features/loan/queryKeys'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'


export const useReturnLoan = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (loanId: number) => returnLoan(loanId),

    onSuccess: (_, loanId) => {
      toast.success('Book returned successfully!')

      queryClient.invalidateQueries({
        queryKey: loansKeys.all,
      })
    },

    onError: (error: unknown) => {
      toast.error('Failed to return book!')
      console.error(error)
    },
  })
}