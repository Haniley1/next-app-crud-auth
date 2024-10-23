import { ErrorMessage } from '@hookform/error-message'
import { useForm } from 'react-hook-form'
import { Button } from 'components/Button'
import { Icon } from 'components/Icon'
import {
  emailValidator,
  passwordValidator,
  requiredValidator,
} from 'utils/form'
import styles from './styles.module.scss'
import type { LoginFormProps, LoginFormValues } from './types'

export const LoginForm = ({ disabled, onSubmit }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<LoginFormValues>({
    mode: 'onChange',
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
      <ErrorMessage name="email" errors={errors} />

      <input
        type="password"
        placeholder="Пароль"
        {...register('password', {
          ...requiredValidator(),
          ...passwordValidator(),
        })}
      />
      <ErrorMessage name="password" errors={errors} />

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
      <ErrorMessage name="acceptLicenceAgreement" errors={errors} />

      <Button
        type="submit"
        disabled={!isValid || disabled}
        className={styles.signInButton}
      >
        <Icon section="arrows" name="sign-in" iconStyles={styles.signInIcon} />
        <span>Войти</span>
      </Button>

      {errors.root && <h3 style={{ color: 'red' }}>{errors.root.message}</h3>}
    </form>
  )
}
