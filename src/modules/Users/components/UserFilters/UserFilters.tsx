import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { debounce } from 'utils'
import styles from './styles.module.scss'
import type { UserFiltersForm, UserFiltersProps } from './types'

export const UserFilters = ({ onSubmit }: UserFiltersProps) => {
  const { register, watch, handleSubmit } = useForm<UserFiltersForm>()

  useEffect(() => {
    const debouncedSubmit = debounce(() => handleSubmit(onSubmit)())
    const subscription = watch(debouncedSubmit)

    return () => subscription.unsubscribe()
  }, [])

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
