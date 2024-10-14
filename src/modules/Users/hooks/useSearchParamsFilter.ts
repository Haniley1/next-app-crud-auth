import { useRouter } from 'next/router'
import { removeEmptyKeys } from 'utils/object'
import type { UserFiltersForm } from '../components/UserFilters/types'

export const useSearchParamsFilter = () => {
  const { query, isReady, push } = useRouter()

  const searchParamsValues: UserFiltersForm = {
    email: query.email?.toString(),
    first_name: query.first_name?.toString(),
    last_name: query.last_name?.toString(),
  }

  const addSearchParams = (values: UserFiltersForm) => {
    const params: UserFiltersForm = removeEmptyKeys({
      email: values.email,
      first_name: values.first_name,
      last_name: values.last_name,
    })

    push({ query: params }, undefined, { shallow: true })
  }

  return { searchParamsValues, addSearchParams, isReady }
}
