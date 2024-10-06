import { AxiosError } from 'axios'
import { GetStaticPropsResult } from 'next'

export function is500Error(err: unknown): boolean {
  if (
    err instanceof AxiosError &&
    typeof err.response?.status === 'number' &&
    err?.response?.status >= 500
  ) {
    return true
  }

  return false
}

const error = {
  props: {
    isError500: true,
  },
}
const notFound = {
  notFound: true,
}

const createProps = (isServerSide: boolean, is500Err: boolean) => {
  if (isServerSide && is500Err) {
    return error
  }

  if (isServerSide && !is500Err) {
    return notFound
  }

  if (is500Err) {
    return { ...error }
  }

  return { ...notFound }
}

type ReturnedProps = GetStaticPropsResult<{ isError500: boolean }>

export const defineNextError = (
  err: unknown,
  isServerSide?: boolean
): ReturnedProps => {
  return createProps(!!isServerSide, is500Error(err)) as ReturnedProps
}
