import { useFilteredUsers } from 'modules/Users/hooks'
import { UserCard } from '../UserCard'
import type { UsersListProps } from './types'
import styles from './styles.module.scss'

export const UsersList = ({ users, filters, onDelete }: UsersListProps) => {
  const filteredUsers = useFilteredUsers(users, filters)

  return (
    <div className={styles.usersGrid}>
      {filteredUsers.map((user) => (
        <UserCard key={user.id} user={user} onDelete={onDelete} />
      ))}
    </div>
  )
}
