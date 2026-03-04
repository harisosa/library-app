'use client'

import React, { useState } from 'react'
import { X, Star } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { useCreateReview } from '@/features/review/hooks'
import { cn } from '@/lib'


type GiveReviewDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  bookId: number
  initialStar?: number
}

export const GiveReviewDialog: React.FC<GiveReviewDialogProps> = ({
  open,
  onOpenChange,
  bookId,
  initialStar = 0,
}) => {
  const [star, setStar] = useState<number>(initialStar)
  const [comment, setComment] = useState<string>('')

  const createReviewM = useCreateReview()


  const isSending = createReviewM.isPending
  const canSend = star >= 1 && comment.trim().length > 0 && !isSending

  const handleSend = () => {
    if (!canSend) {
      toast.error('Please give rating and comment first.')
      return
    }

    createReviewM.mutate(
      { bookId, star, comment: comment.trim() },
      {
        onSuccess: () => {
          onOpenChange(false)
        },
      }
    )
  }

  const handleOpenChange = (nextOpen: boolean) => {
  if (!nextOpen) {
    setStar(initialStar)
    setComment("")
  }
  onOpenChange(nextOpen)
}

  return (
    <Dialog open={open} onOpenChange={(v) => !isSending && handleOpenChange(v)}>
      <DialogContent
        className={cn(
          'w-[calc(100%-32px)] max-w-130 rounded-2xl p-6',
          'border bg-white shadow-lg')}
      >
        <div className="flex items-center justify-between">
          <DialogTitle className="text-base font-semibold text-neutral-900">
            Give Review
          </DialogTitle>
        </div>

        {/* Rating */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="text-sm font-medium text-neutral-700">Give Rating</div>

          <div className="flex items-center gap-3">
            {Array.from({ length: 5 }).map((_, idx) => {
              const value = idx + 1
              const active = value <= star

              return (
                <button
                  key={value}
                  type="button"
                  aria-label={`Rate ${value} star`}
                  className="rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 disabled:opacity-50"
                  onClick={() => setStar(value)}
                  disabled={isSending}
                >
                  <Star
                    className={cn(
                      'h-7 w-7',
                      active ? 'fill-amber-400 text-amber-400' : 'text-neutral-300')
                    }
                  />
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-4">
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Please share your thoughts about this book"
            disabled={isSending}
            className={cn(
              'min-h-45 resize-none rounded-xl',
              'border-neutral-200 text-sm',
              'placeholder:text-neutral-400',
              'focus-visible:ring-2 focus-visible:ring-neutral-200')}
          />
        </div>

        <div className="mt-5">
          <Button
            type="button"
            onClick={handleSend}
            disabled={!canSend}
            className={cn(
              'h-10 w-full rounded-full',
              'bg-blue-600 hover:bg-blue-700 text-white',
              'disabled:opacity-60 disabled:pointer-events-none')}
          >
            {isSending ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}