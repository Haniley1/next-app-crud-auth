import useSWR from 'swr/immutable'
import { getUsers } from 'api/endpoints'
import type { User } from 'api/models'
import { API_PATHS } from 'api/paths'
import { Button } from 'components/Button'
import { Loader } from 'components/Loader'
import { useBoolState } from 'hooks'
import { makeid } from 'utils/string'
import { UserFilters, UserModal, UsersList } from './components'
import type { UserFormValues } from './components/UserForm/types'
import { useFilteredUsers } from './hooks'
import styles from './styles.module.scss'
import { getAvatarSrc } from './utils/utils'

export const Users = () => {
  const { data: response, isLoading, mutate } = useSWR(API_PATHS.users, getUsers)
  const { users, isReady } = useFilteredUsers(response?.data)
  const [isShowModal, showModal, hideModal] = useBoolState(false)

  const handleUserDelete = (id: User['id']) => {
    if (!response) return

    const newUsersData = response?.data.filter((user) => user.id !== id)
    mutate({ ...response, data: newUsersData }, { revalidate: false })
  }

  const handleAddUser = async (user: UserFormValues) => {
    if (!response) return

    const avatar = await getAvatarSrc(user.avatar)
    const newUser: User = { ...user, id: makeid(), avatar }
    const newUsersData = [...response?.data, newUser]

    await mutate({ ...response, data: newUsersData }, { revalidate: false })
    hideModal()
  }

  const showUsersList = !isLoading && isReady

  return (
    <div>
      <div className={styles.header}>
        <h1>Пользователи</h1>
        <Button onClick={showModal}>+ Добавить пользователя</Button>
      </div>
      <UserFilters onSubmit={() => mutate(undefined, { revalidate: false })} />
      {!showUsersList && <Loader />}
      {showUsersList && (
        <UsersList
          users={users}
          onDelete={handleUserDelete}
        />
      )}
      <UserModal
        show={isShowModal}
        onClose={hideModal}
        onSubmit={handleAddUser}
      />
    </div>
  )
}
