import { UserCard } from '../UserCard'
import styles from './styles.module.scss'
import type { UsersListProps } from './types'

export const UsersList = ({
  users,
  allowDelete = false,
  onDelete,
}: UsersListProps) => {
  return (
    <div className={styles.usersGrid}>
      {users?.map((user) => (
        <UserCard
          key={user.id}
          allowDelete={allowDelete}
          user={user}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
