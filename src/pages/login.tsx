import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import type { Meta } from 'api/models'
import { ROUTES } from 'api/paths'
import { getSession } from 'api/session'
import { Layout, SeoHead } from 'components/core'
import { Login } from 'modules/Login'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx.req, ctx.res)
  const meta: Meta = {
    seoTitle: 'Страница авторизации',
  }

  if (session.isLoggedIn) {
    return { redirect: { destination: ROUTES.profile }, props: {} }
  }

  return { props: { meta } }
}

export default function LoginPage({
  meta,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <SeoHead {...meta} />
      <Login />
    </Layout>
  )
}
