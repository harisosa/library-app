import { api } from '@/lib/http/api'
import { AdminUsersResponse, GetAdminUsersParams } from '../types'



export const getAdminUsers = (params: GetAdminUsersParams) => {
  return api<AdminUsersResponse>({
    method: 'GET',
    url: '/admin/users',
    params,
  })
}