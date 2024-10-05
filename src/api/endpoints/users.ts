import api from 'api/instance'
import { BaseListResponse, type User } from 'api/models'
import { API_PATHS } from 'api/paths'

export const getUsers = async () => {
  const response = await api.get<BaseListResponse<User>>(API_PATHS.users, {
    params: { per_page: 12 },
  })

  return response.data
}

export const getUser = async (id: string | number) => {
  const response = await api.get<{ data: User }>(API_PATHS.user(id))

  return response.data
}
