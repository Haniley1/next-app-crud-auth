import { useForm } from 'react-hook-form'
import { Icon } from 'components'
import { Button } from 'components/forms'
import {
  emailValidator,
  passwordValidator,
  requiredValidator,
} from 'utils/form'
import styles from './styles.module.scss'
import type { LoginFormProps, LoginFormValues } from './types'

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<LoginFormValues>({
    mode: 'onChange',
    // Только для теста
    defaultValues: { email: 'eve.holt@reqres.in', password: '123456' },
  })

  const beforeSubmit = async (values: LoginFormValues) => {
    const error = await onSubmit(values)

    if (error && error instanceof Error) {
      setError('root', { message: error.message })
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(beforeSubmit)}>
      <input
        type="email"
        placeholder="Электронная почта"
        {...register('email', {
          ...requiredValidator(),
          ...emailValidator(),
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        type="password"
        placeholder="Пароль"
        {...register('password', {
          ...requiredValidator(),
          ...passwordValidator(),
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}

      <label>
        <input
          type="checkbox"
          style={{ marginRight: 12 }}
          {...register('acceptLicenceAgreement', {
            ...requiredValidator('Необходимо принять правила соглашения'),
          })}
        />
        <span>
          Я принимаю{' '}
          <a href="https://google.com" target="_blank">
            правила лицензионного соглашения
          </a>
        </span>
      </label>
      {errors.acceptLicenceAgreement && (
        <span>{errors.acceptLicenceAgreement.message}</span>
      )}

      <Button type="submit" disabled={!isValid} className={styles.signInButton}>
        <Icon section="arrows" name="sign-in" iconStyles={styles.signInIcon} />
        <span>Войти</span>
      </Button>

      {errors.root && <h3 style={{ color: 'red' }}>{errors.root.message}</h3>}
    </form>
  )
}
