import api from "api/instance"
import { API_PATHS } from "api/paths"

export interface SignInResponse {
  token: string
}

export interface SignInErrorResponse {
  error: string
}

export const getToken = (email: string, password: string) => {
  return api.post<SignInResponse>(API_PATHS.getToken, { email, password })
}
