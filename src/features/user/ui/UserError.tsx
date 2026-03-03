"use client"

import React from "react"
import { Button } from "@/components/ui/button"

type Props = {
  onRetry: () => void
}

export const UsersError: React.FC<Props> = ({ onRetry }) => {
  return (
    <div className="rounded-2xl border bg-background p-6">
      <div className="space-y-2">
        <h2 className="text-base font-semibold">Failed to load users</h2>
        <p className="text-sm text-muted-foreground">
          Please try again.
        </p>
      </div>

      <div className="mt-4">
        <Button onClick={onRetry}>Retry</Button>
      </div>
    </div>
  )
}