import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getUser } from 'api/endpoints'
import type { Meta } from 'api/models'
import { ROUTES } from 'api/paths'
import { Layout, SeoHead, withAuth } from 'components/core'
import { UserDetail } from 'modules/UserDetail'
import { defineNextError } from 'utils/defineNextError'
import { fullname } from 'utils/string'

export const getServerSideProps: GetServerSideProps = withAuth(
  async (ctx, session) => {
    try {
      const response = await getUser(session.id!)

      if (!response.data) {
        throw new Error('User not found')
      }

      const meta: Meta = {
        seoTitle: `Профиль ${fullname(response.data)}`,
      }

      return { props: { data: response.data, meta } }
    } catch (error) {
      return defineNextError(error)
    }
  },
  ROUTES.profile
)

export default function ProfilePage({
  data,
  meta,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <SeoHead {...meta} />
      <UserDetail user={data} />
    </Layout>
  )
}
