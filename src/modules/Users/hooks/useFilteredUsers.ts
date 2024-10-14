import { useMemo } from 'react'
import type { User } from 'api/models'
import type { UserFiltersForm } from '../components/UserFilters/types'

export const useFilteredUsers = (
  users: User[] = [],
  filter?: UserFiltersForm
) => {
  const dynamicFilter = (user: User) => {
    if (!filter) return false

    let result = true

    for (const [key, value] of Object.entries(filter)) {
      if (!value) continue

      result = user[key as keyof UserFiltersForm]
        .toLowerCase()
        .includes(value.toLowerCase())
    }

    return result
  }

  const filteredUsers = useMemo(() => {
    return users.filter(dynamicFilter)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users, filter])

  return filteredUsers
}
