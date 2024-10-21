import type { GetServerSideProps } from 'next'
import { ROUTES } from 'api/paths'
import { getSession } from 'api/session'

export function withAuth(gssp: GetServerSideProps, redirectOnAuth: string) {
  return (async (context) => {
    const session = await getSession(context.req, context.res)

    if (!session.isLoggedIn) {
      const destination = `${ROUTES.login}?redirect=${redirectOnAuth}`

      return {
        redirect: { statusCode: 302, destination },
      }
    }

    const gsspData = await gssp(context)
    const props = gsspData?.props ? { ...gsspData.props } : { session }

    return {
      props,
    }
  }) satisfies GetServerSideProps
}
