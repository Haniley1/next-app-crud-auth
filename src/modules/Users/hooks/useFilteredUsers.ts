import { useMemo } from 'react'
import type { User } from 'api/models'
import { useSearchParamsFilter } from './useSearchParamsFilter'
import type { UserFiltersForm } from '../components/UserFilters/types'

export const useFilteredUsers = (
  users: User[] = []
) => {
  const { searchParamsValues, isReady } = useSearchParamsFilter()

  const dynamicFilter = (user: User) => {
    if (!searchParamsValues) return true

    let result = true

    for (const [key, value] of Object.entries(searchParamsValues)) {
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
  }, [users, searchParamsValues])

  return { users: filteredUsers, isReady }
}
