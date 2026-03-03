'use client'

import * as React from 'react'

export const MyReviewsError: React.FC = () => {
  return (
    <div className="rounded-2xl border bg-white p-6 text-sm text-neutral-700">
      Failed to load reviews. Please try again.
    </div>
  )
}