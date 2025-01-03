import axios, { type AxiosRequestConfig } from 'axios'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import type { UserLogin } from 'api/models'
import { API_PATHS } from 'api/paths'
import { defaultSession, type SessionData } from 'api/session'

async function fetcher<JSON = unknown>(
  url: string,
  init?: AxiosRequestConfig
): Promise<JSON> {
  return axios(url, init).then((res) => res.data)
}

function doLogin(url: string, { arg }: { arg: UserLogin }) {
  return fetcher<SessionData>(url, {
    method: 'POST',
    data: arg,
  })
}

function doLogout(url: string) {
  return fetcher<SessionData>(url, {
    method: 'DELETE',
  })
}

/**
 * Хук для сетевого взаимодействия с сессией пользователя
 */
export function useSession() {
  const { data: session, isLoading } = useSWR<SessionData>(
    API_PATHS.session,
    fetcher,
    {
      fallbackData: defaultSession,
    }
  )

  const loginMutation = useSWRMutation(API_PATHS.session, doLogin, {
    revalidate: false,
  })
  const logoutMutation = useSWRMutation(API_PATHS.session, doLogout)

  return { session, loginMutation, logoutMutation, isLoading }
}
