import { isAxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useSession } from 'hooks'
import { LoginForm } from './LoginForm'
import type { LoginFormValues } from './LoginForm/types'

export const Login = () => {
  const router = useRouter()
  const { login, session } = useSession()

  const onSubmit = async (values: LoginFormValues) => {
    try {
      await login(values)

      if (router.query.redirect) {
        router.push(router.query.redirect.toString())
      }
    } catch (err) {
      const error = isAxiosError(err)
        ? err.response?.data.error
        : 'Произошла непредвиденная ошибка'
      
      return new Error(error)
    }
  }

  if (session?.isLoggedIn) {
    return <h2>Вы уже авторизованы</h2>
  }

  return <LoginForm onSubmit={onSubmit} />
}
