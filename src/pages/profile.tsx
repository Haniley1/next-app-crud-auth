import { AxiosError } from 'axios'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getUser } from 'api/endpoints'
import type { Meta } from 'api/models'
import { ROUTES } from 'api/paths'
import { getSession } from 'api/session'
import { Layout, SeoHead, withAuth } from 'components/core'
import { UserDetail } from 'modules/UserDetail'
import { defineNextError } from 'utils/defineNextError'
import { fullname } from 'utils/string'

export const getServerSideProps = withAuth(async (ctx) => {
  const session = await getSession(ctx.req, ctx.res)

  try {
    const response = await getUser(session.id!)
    throw new AxiosError('test')

    return { props: response }
  } catch (error) {
    const err = defineNextError(error)
    console.log(err)
    return err
  }
}, ROUTES.profile) satisfies GetServerSideProps

export default function ProfilePage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const meta: Meta = {
    seoTitle: `Профиль ${fullname(data)}`,
  }

  return (
    <Layout>
      <SeoHead {...meta} />
      <UserDetail user={data} />
    </Layout>
  )
}
