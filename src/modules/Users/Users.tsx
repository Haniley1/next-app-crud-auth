import { Button } from 'components/Button'
import { Loader } from 'components/Loader'
import { useBoolState, useSession } from 'hooks'
import { UserFilters, UserModal, UsersList } from './components'
import type { UserFormValues } from './components/UserForm/types'
import { useFilteredUsers } from './hooks'
import { useUserActions } from './hooks/useUserActions'
import styles from './styles.module.scss'

export const Users = () => {
  const { session } = useSession()
  const { data, isLoading, mutate, addUser, deleteUser } = useUserActions()
  const { users, isReady } = useFilteredUsers(data)
  const [isShowModal, showModal, hideModal] = useBoolState(false)

  const handleAddUser = async (user: UserFormValues) => {
    await addUser(user)
    hideModal()
  }

  const onSubmitFilters = () => {
    mutate(undefined, { revalidate: false })
  }

  const showUsersList = !isLoading && isReady

  return (
    <div>
      <div className={styles.header}>
        <h1>Пользователи</h1>
        <Button onClick={showModal}>+ Добавить пользователя</Button>
      </div>
      <UserFilters onSubmit={onSubmitFilters} />
      {!showUsersList && <Loader />}
      {showUsersList && (
        <UsersList
          users={users}
          allowDelete={session?.isLoggedIn}
          onDelete={deleteUser}
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
