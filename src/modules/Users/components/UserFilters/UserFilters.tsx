import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParamsFilter } from 'modules/Users/hooks'
import { debounce } from 'utils'
import styles from './styles.module.scss'
import type { UserFiltersForm, UserFiltersProps } from './types'

export const UserFilters = ({ onSubmit }: UserFiltersProps) => {
  const { searchParamsValues, addSearchParams, isReady } =
    useSearchParamsFilter()
  const { register, watch, handleSubmit } = useForm<UserFiltersForm>({
    values: searchParamsValues,
  })

  useEffect(() => {
    const debouncedSubmit = debounce((values) => {
      addSearchParams(values as UserFiltersForm)
      handleSubmit(onSubmit)()
    }, 300)
    const subscription = watch(debouncedSubmit)

    return () => subscription.unsubscribe()
  }, [])

  // Вызвать сабмит фильтров, когда подтянутся значения из GET-параметров
  // Хак, чтобы список пользаков не отрисовывался дважды: без фильтров и с фильтрами
  useEffect(() => {
    if (isReady) {
      handleSubmit(onSubmit)()
    }
  }, [isReady])

  return (
    <div className={styles.filters}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Электронная почта"
          type="email"
          {...register('email')}
        />
        <input placeholder="Имя" type="text" {...register('first_name')} />
        <input placeholder="Фамилия" type="text" {...register('last_name')} />
      </form>
    </div>
  )
}
