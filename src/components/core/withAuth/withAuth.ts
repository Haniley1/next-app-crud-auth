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
      const destination = `${ROUTES.login}?redirect=${redirectOnAuth}`

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
