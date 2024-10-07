import { useForm } from 'react-hook-form'
import { Button } from 'components/forms'
import { emailValidator, requiredValidator } from 'utils/form'
import { ariaInvalid } from 'utils/form/misc'
import styles from './styles.module.scss'
import type { UserFormProps, UserFormValues } from './types'

const AVATAR_ACCEPT_TYPES = ['image/png', 'image/jpeg']

export const UserForm = ({ onSubmit: propOnSubmit }: UserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<UserFormValues>({ mode: 'onChange' })

  const onSubmit = (values: UserFormValues) => {
    const file = values.avatar.item(0)
    
    // TODO: Сделать валидатор файлов и вынести в хелперы
    if (!file || !AVATAR_ACCEPT_TYPES.includes(file.type)) {
      return setError('avatar', {
        message: 'Данный тип файла недоступен для аватара пользователя',
      })
    }

    propOnSubmit(values)
  }

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.title}>Создание пользователя</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Электронная почта"
          {...ariaInvalid(errors.email)}
          {...register('email', {
            ...requiredValidator(),
            ...emailValidator(),
          })}
        />
        {errors.email && <span>{errors.email?.message}</span>}

        <input
          placeholder="Имя"
          {...ariaInvalid(errors.first_name)}
          {...register('first_name', requiredValidator())}
        />
        {errors.first_name && <span>{errors.first_name.message}</span>}

        <input
          placeholder="Фамилия"
          {...ariaInvalid(errors.last_name)}
          {...register('last_name', requiredValidator())}
        />
        {errors.last_name && <span>{errors.last_name.message}</span>}

        <label htmlFor="avatar">Аватар</label>
        <input
          type="file"
          accept={AVATAR_ACCEPT_TYPES.join(', ')}
          {...ariaInvalid(errors.avatar)}
          {...register('avatar', requiredValidator())}
        />
        {errors.avatar && <span>{errors.avatar.message}</span>}

        <Button type="submit">Создать пользователя</Button>
        <Button type="reset">Сбросить форму</Button>
      </form>
    </div>
  )
}
