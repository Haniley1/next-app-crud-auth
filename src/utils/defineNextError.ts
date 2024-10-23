import { AxiosError } from 'axios'
import { GetStaticPropsResult } from 'next'

type ReturnedProps = GetStaticPropsResult<{ isError500: boolean }>

const error: ReturnedProps = {
  props: {
    isError500: true,
  },
}
const notFound: ReturnedProps = {
  notFound: true,
}

export function is500Error(err: unknown): boolean {
  return (
    err instanceof AxiosError &&
    !!err.response?.status &&
    err?.response?.status >= 500
  )
}

export const defineNextError = (err: unknown): ReturnedProps => {
  return is500Error(err) ? error : notFound
}
