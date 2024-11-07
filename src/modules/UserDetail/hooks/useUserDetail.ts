import { useRouter } from 'next/router'
import useSWR from 'swr'
import type { GetUserResponse } from 'api/endpoints'
import { KEYS } from 'api/keys'

export const useUserDetail = () => {
  const router = useRouter()

  return useSWR<GetUserResponse>(
    KEYS.users.detail(router.query.id?.toString() || '')
  )
}
