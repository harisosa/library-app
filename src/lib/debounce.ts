'use client'

import { useEffect, useState } from "react"

export const useDebounce = <T,>(value: T, delayMs: number) => {
  const [v, setV] = useState(value)

  useEffect(() => {
    const t = setTimeout(() => setV(value), delayMs)
    return () => clearTimeout(t)
  }, [value, delayMs])

  return v
}