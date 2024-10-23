import { isAxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useSession } from 'hooks'
import { LoginForm } from './LoginForm'
import type { LoginFormValues } from './LoginForm/types'

export const Login = () => {
  const router = useRouter()
  const { loginMutation } = useSession()

  const onSubmit = async (values: LoginFormValues) => {
    try {
      await loginMutation.trigger(values)

      if (router.query.redirect) {
        router.push(router.query.redirect.toString())
      }
    } catch (err) {
      const isBackError = isAxiosError(err) && err.response?.data
      const error = isBackError
        ? err.response?.data.error
        : 'Произошла непредвиденная ошибка'

      return new Error(error)
    }
  }

  return <LoginForm disabled={loginMutation.isMutating} onSubmit={onSubmit} />
}
