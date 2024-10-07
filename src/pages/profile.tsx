import { getIronSession } from 'iron-session'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getUser } from 'api/endpoints'
import type { Meta, User } from 'api/models'
import { sessionOptions, type SessionData } from 'api/session'
import { Layout, SeoHead } from 'components/core'
import { UserDetail } from 'modules/UserDetail'
import { defineNextError } from 'utils/defineNextError'
import { fullname } from 'utils/string'

export const getServerSideProps = (async (ctx) => {
  const session = await getIronSession<SessionData>(
    ctx.req,
    ctx.res,
    sessionOptions
  )

  try {
    const response = await getUser(session.id!)

    return { props: response }
  } catch (error) {
    return {
      ...defineNextError(error),
      props: { data: {} as User },
    }
  }
}) satisfies GetServerSideProps

export default function ProfilePage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const meta: Meta = {
    seoTitle: `Профиль ${fullname(data.first_name, data.last_name)}`,
  }

  return (
    <Layout>
      <SeoHead {...meta} />
      <UserDetail user={data} />
    </Layout>
  )
}
