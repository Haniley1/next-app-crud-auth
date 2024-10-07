import type { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import type { SignInErrorResponse } from 'api/endpoints'
import { useSession } from 'hooks'
import { LoginForm } from './LoginForm'
import type { LoginFormValues } from './LoginForm/types'

export const Login = () => {
  const router = useRouter()
  const { login } = useSession()

  const onSubmit = async (values: LoginFormValues) => {
    return login(values)
      .then(() => {
        if (router.query.redirect) {
          router.push(router.query.redirect.toString())
        }
      })
      .catch((err: AxiosError<SignInErrorResponse>) => {
        return Error(err.response?.data.error)
      })
  }

  return <LoginForm onSubmit={onSubmit} />
}
