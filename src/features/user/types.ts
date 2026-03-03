export type User = {
  id: number
  name: string
  email: string
  phone: string
  profilePhoto: string | null
  role: 'USER' | 'ADMIN'
  createdAt: string
}

export type AdminUsersResponse = {
  users: User[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export type GetAdminUsersParams = {
  q?: string
  page: number
  limit: number
}