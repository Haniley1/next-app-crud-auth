import type { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { ROUTES } from 'api/paths'
import { getSession } from 'api/session'

export function withAuth(gssp: GetServerSideProps, redirectOnAuth: string) {
  return (async (context: GetServerSidePropsContext) => {
    const session = await getSession(context.req, context.res)

    if (!session.isLoggedIn) {
      const destination = `${ROUTES.login}?redirect=${redirectOnAuth}`

      return {
        redirect: { statusCode: 302, destination },
      }
    }

    const gsspResult = await gssp(context)
    return gsspResult
  })
}
