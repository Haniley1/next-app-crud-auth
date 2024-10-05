import useSWR from 'swr/immutable'
import styles from './styles.module.scss'
import { API_PATHS } from 'api/paths'
import { getUsers } from 'api/endpoints'
import { UserFilters, UserModal, UsersList } from './components'
import type { User } from 'api/models'
import { useState } from 'react'
import type { UserFiltersForm } from './components/UserFilters/types'
import { Button } from 'components/forms'
import { useBoolState } from 'hooks'
import type { UserFormValues } from './components/UserForm/types'
import { getAvatarSrc } from './utils/utils'
import { makeid } from 'utils/string'

export const Users = () => {
  const { data: users, mutate } = useSWR(API_PATHS.users, getUsers)
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

    console.log(newUser)

    mutate({ ...users, data: newUsersData }, { revalidate: false })
    hideModal()
  }

  return (
    <div>
      <div className={styles.header}>
        <h1>Пользователи</h1>
        <Button children="+ Добавить пользователя" onClick={showModal} />
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
