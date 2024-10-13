import type { GetServerSideProps } from 'next'
import { ROUTES } from 'api/paths'
import { getSession } from 'api/session'

export function withAuth(
  gssp: GetServerSideProps,
  redirectOnAuth: string
): GetServerSideProps {
  return async (context) => {
    const session = await getSession(context.req, context.res)

    if (!session.isLoggedIn) {
      const params = new URLSearchParams()
      params.append('redirect', redirectOnAuth)
      const destination = ROUTES.login + '?' + params.toString()

      return {
        redirect: { statusCode: 302, destination },
      }
    }

    const gsspData = await gssp(context)

    if (!('props' in gsspData)) {
      throw new Error('invalid getSSP result')
    }

    return {
      props: {
        ...gsspData.props,
        session,
      },
    }
  }
}