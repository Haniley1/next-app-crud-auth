import type { IronSession } from 'iron-session'
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  PreviewData,
} from 'next'
import type { ParsedUrlQuery } from 'querystring'
import { ROUTES } from 'api/paths'
import { getSession, type SessionData } from 'api/session'

export type GetServerSidePropsWithSession<
  Props extends { [key: string]: unknown } = { [key: string]: unknown },
  Params extends ParsedUrlQuery = ParsedUrlQuery,
  Preview extends PreviewData = PreviewData,
> = (
  context: GetServerSidePropsContext<Params, Preview>,
  session: IronSession<SessionData>
) => Promise<GetServerSidePropsResult<Props>>

export function withAuth(
  gssp: GetServerSidePropsWithSession,
  redirectOnAuth: string
): GetServerSideProps {
  return async (context: GetServerSidePropsContext) => {
    const session = await getSession(context.req, context.res)

    if (!session.isLoggedIn) {
      const destination = `${ROUTES.login}?redirect=${redirectOnAuth}`

      return {
        redirect: { statusCode: 302, destination },
      }
    }

    const gsspResult = await gssp(context, session)
    return gsspResult
  }
}
