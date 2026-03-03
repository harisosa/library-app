import { useQuery } from '@tanstack/react-query'
import { GetAdminUsersParams } from '@/features/user/types'
import { getAdminUsers } from '@/features/user/api'
import { userQueryKeys } from '@/features/user/queryKeys'


export const useGetUsers = (params: GetAdminUsersParams) => {
  return useQuery({
    queryKey:  userQueryKeys.list(params),
    queryFn: async () => getAdminUsers(params),
  })
}