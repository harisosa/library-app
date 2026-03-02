'use client'

import { Toaster } from 'sonner'

export const AppToaster = () => {
  return (
    <Toaster
      position="top-right"
      closeButton
      richColors
      toastOptions={{
        classNames: {
          toast:
            'rounded-2xl px-5 py-4 min-h-14 w-[260px] shadow-[0_8px_30px_rgba(0,0,0,0.12)]',
          title: 'text-sm font-medium',
          description: 'text-sm opacity-90',
          closeButton:
            'border-0 bg-transparent text-white/90 hover:text-white',
        },
      }}
      className="
        top-6! right-6!
      "
    />
  )
}