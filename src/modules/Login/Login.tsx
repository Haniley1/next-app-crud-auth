import type { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSession } from 'hooks'
import { LoginForm } from './LoginForm'
import type { LoginFormValues } from './LoginForm/types'

export const Login = () => {
  const router = useRouter()
  const [error, setError] = useState<string>()
  const { login } = useSession()

  const onSubmit = async (values: LoginFormValues) => {
    login({ email: values.email, password: values.password })
      .then(() => {
        if (router.query.redirect) {
          router.push(router.query.redirect.toString())
        }
      })
      .catch((error) => {
        setError(error.response?.data.error)
      })
  }

  return <LoginForm error={error} onSubmit={onSubmit} />
}
