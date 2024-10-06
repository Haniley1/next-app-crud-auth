import api, { clientApi } from "api/instance"
import { API_PATHS } from "api/paths"

export interface SignInResponse {
  token: string
}

export interface SignInErrorResponse {
  error: string
}

export const signIn = (email: string, password: string) => {
  return api.post<SignInResponse>(API_PATHS.signIn, { email, password })
}
