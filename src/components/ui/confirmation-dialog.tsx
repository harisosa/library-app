'use client'

import * as React from 'react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { cn } from '@/lib'

type ConfirmationDialogProps = {
  title: string
  description?: string

  /** Controlled mode */
  open?: boolean
  onOpenChange?: (open: boolean) => void

  trigger?: React.ReactNode

  cancelText?: string
  confirmText?: string

  isConfirmLoading?: boolean

  isConfirmDisabled?: boolean

  onConfirm: () => void

  contentClassName?: string
  cancelClassName?: string
  confirmClassName?: string
}

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  title,
  description,
  open,
  onOpenChange,
  trigger,
  cancelText = 'Cancel',
  confirmText = 'Confirm',
  isConfirmLoading = false,
  isConfirmDisabled = false,
  onConfirm,
  contentClassName,
  cancelClassName,
  confirmClassName,
}) => {
  const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isConfirmLoading || isConfirmDisabled) {
      e.preventDefault()
      return
    }
    onConfirm()
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      {trigger ? <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger> : null}

      <AlertDialogContent
        className={cn(
          'w-[calc(100%-32px)] max-w-130 rounded-2xl border bg-white p-6 shadow-lg',
          contentClassName)
        }
      >
        <div className="space-y-2">
          <AlertDialogTitle className="text-base font-semibold text-neutral-900">
            {title}
          </AlertDialogTitle>

          {description ? (
            <AlertDialogDescription className="text-md text-neutral-500 font-semibold">
              {description}
            </AlertDialogDescription>
          ) : null}
        </div>

        <div className="mt-6 flex gap-4">
          <AlertDialogCancel
            className={cn(
                            'h-10 flex-1  bg-white text-sm font-medium text-neutral-700',
              'hover:bg-neutral-50',
              cancelClassName,
            )}
          >
            {cancelText}
          </AlertDialogCancel>

          <AlertDialogAction
          variant="destructive"
            onClick={handleConfirm}
            className={cn(
              'h-10 flex-1 text-sm font-medium text-white',
              'bg-[#D9206E]',
              'disabled:pointer-events-none disabled:opacity-60',
              confirmClassName,
            )}
            disabled={isConfirmDisabled || isConfirmLoading}
          >
            {isConfirmLoading ? 'Processing...' : confirmText}
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}