import useSWR from 'swr/immutable'
import styles from './styles.module.scss'
import { API_PATHS } from 'api/paths'
import { getUsers } from 'api/endpoints'
import { UserCard, UserFilters } from './components'
import type { User } from 'api/models'
import { useState } from 'react'
import type { UserFiltersForm } from './components/UserFilters/types'
import { useFilteredUsers } from './hooks'

export const Users = () => {
  const { data: users, mutate } = useSWR(API_PATHS.users, getUsers)
  const [filters, setFilters] = useState<UserFiltersForm>()
  const filteredUsers = useFilteredUsers(users?.data, filters)

  const handleUserDelete = (id: User['id']) => {
    if (!users) return

    const newUsersData = users?.data.filter((user) => user.id !== id)
    mutate({ ...users, data: newUsersData }, { revalidate: false })
  }

  return (
    <div>
      <h1>Пользователи</h1>
      <UserFilters onSubmit={setFilters} />
      <div className={styles.usersGrid}>
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} onDelete={handleUserDelete} />
        ))}
      </div>
    </div>
  )
}
