import { useEffect, useState } from 'react'
import type { User } from 'api/models'
import type { UserFiltersForm } from '../components/UserFilters/types'

export const useFilteredUsers = (
  users: User[] = [],
  filter?: UserFiltersForm
) => {
  const [filteredUsers, setFilteredUsers] = useState(users)

  const dynamicFilter = (user: User) => {
    if (!filter) return true

    let result = true

    for (const [key, value] of Object.entries(filter)) {
      if (!value) continue

      result = user[key as keyof UserFiltersForm]
        .toLowerCase()
        .includes(value.toLowerCase())
    }

    return result
  }

  useEffect(() => {
    setFilteredUsers(users.filter(dynamicFilter))
  }, [users, filter])

  return filteredUsers
}
