import useSWR from 'swr'
import { getUsers } from 'api/endpoints'
import type { BaseListResponse, User } from 'api/models'
import { API_PATHS } from 'api/paths'
import { makeid } from 'utils/string'
import type { UserFormValues } from '../components/UserForm/types'
import { getAvatarSrc } from '../utils/utils'

const USERS_KEY = API_PATHS.users

export const useUserActions = () => {
  const { data: response, isLoading, mutate } = useSWR(USERS_KEY, getUsers)

  const deleteUser = (id: User['id']): BaseListResponse<User> | undefined => {
    if (!response) return

    const newUsersData = response?.data.filter((user) => user.id !== id)
    mutate({ ...response, data: newUsersData }, { revalidate: false })
  }

  const addUser = async (
    user: UserFormValues
  ): Promise<BaseListResponse<User> | undefined> => {
    if (!response) return

    const avatar = await getAvatarSrc(user.avatar)
    const newUser: User = { ...user, id: makeid(), avatar }
    const newUsersData = [...response?.data, newUser]

    await mutate({ ...response, data: newUsersData }, { revalidate: false })
  }

  return { data: response?.data, isLoading, addUser, deleteUser, mutate }
}
