import type { BookStatus } from "@/features/books/types"

export type AdminBookStatusUI = "all" | "available" | "borrowed" | "returned"

export const mapStatusUiToApi = (s: AdminBookStatusUI): BookStatus => s