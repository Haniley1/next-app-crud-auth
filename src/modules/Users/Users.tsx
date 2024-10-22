import { useState } from 'react'
import useSWR from 'swr/immutable'
import { getUsers } from 'api/endpoints'
import type { User } from 'api/models'
import { API_PATHS } from 'api/paths'
import { Button } from 'components/Button'
import { useBoolState } from 'hooks'
import { makeid } from 'utils/string'
import { UserFilters, UserModal, UsersList } from './components'
import type { UserFiltersForm } from './components/UserFilters/types'
import type { UserFormValues } from './components/UserForm/types'
import styles from './styles.module.scss'
import { getAvatarSrc } from './utils/utils'

export const Users = () => {
  const { data: users, mutate } = useSWR([API_PATHS.users], getUsers)
  const [filters, setFilters] = useState<UserFiltersForm>()
  const [isShowModal, showModal, hideModal] = useBoolState(false)

  const handleUserDelete = (id: User['id']) => {
    if (!users) return

    const newUsersData = users?.data.filter((user) => user.id !== id)
    mutate({ ...users, data: newUsersData }, { revalidate: false })
  }

  const handleAddUser = async (user: UserFormValues) => {
    if (!users) return

    const avatar = await getAvatarSrc(user.avatar)
    const newUser: User = { ...user, id: makeid(), avatar }
    const newUsersData = [...users?.data, newUser]

    mutate({ ...users, data: newUsersData }, { revalidate: false })
    hideModal()
  }

  return (
    <div>
      <div className={styles.header}>
        <h1>Пользователи</h1>
        <Button onClick={showModal}>+ Добавить пользователя</Button>
      </div>
      <UserFilters onSubmit={setFilters} />
      <UsersList
        users={users?.data}
        filters={filters}
        onDelete={handleUserDelete}
      />
      <UserModal
        show={isShowModal}
        onClose={hideModal}
        onSubmit={handleAddUser}
      />
    </div>
  )
}
