import axios, { type AxiosRequestConfig } from 'axios'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import { API_PATHS } from 'api/paths'
import { defaultSession, type SessionData } from 'api/session'

async function fetchJson<JSON = unknown>(
  url: string,
  init?: AxiosRequestConfig
): Promise<JSON> {
  return axios(url, init).then((res) => res.data)
}

function doLogin(url: string, { arg }: { arg: { email: string, password: string } }) {
  return fetchJson<SessionData>(url, {
    method: 'POST',
    data: arg
  })
}

function doLogout(url: string) {
  return fetchJson<SessionData>(url, {
    method: 'DELETE',
  })
}

export function useSession() {
  const { data: session, isLoading } = useSWR(
    API_PATHS.session,
    fetchJson<SessionData>,
    {
      fallbackData: defaultSession,
    }
  )

  const { trigger: login } = useSWRMutation(API_PATHS.session, doLogin, {
    revalidate: false,
  })
  const { trigger: logout } = useSWRMutation(API_PATHS.session, doLogout)

  return { session, logout, login, isLoading }
}
