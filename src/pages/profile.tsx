import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { unstable_serialize } from 'swr'
import { getUser } from 'api/endpoints'
import type { Meta } from 'api/models'
import { API_PATHS, ROUTES } from 'api/paths'
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

      const dataKey = [API_PATHS.users, session.id]
      const meta: Meta = {
        seoTitle: `Профиль ${fullname(response.data)}`,
      }

      return {
        props: {
          dataKey,
          meta,
          fallback: {
            [unstable_serialize(dataKey)]: response,
          },
        },
      }
    } catch (error) {
      return defineNextError(error)
    }
  },
  ROUTES.profile
)

export default function ProfilePage({
  dataKey,
  meta,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <SeoHead {...meta} />
      <UserDetail dataKey={dataKey} />
    </Layout>
  )
}
