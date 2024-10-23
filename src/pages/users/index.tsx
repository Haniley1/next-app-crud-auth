import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getUsers } from 'api/endpoints'
import type { Meta } from 'api/models'
import { API_PATHS } from 'api/paths'
import { Layout, SeoHead } from 'components/core'
import { Users } from 'modules/Users'
import { defineNextError } from 'utils/defineNextError'

export const getStaticProps: GetStaticProps = (async () => {
  try {
    const response = await getUsers()
    const meta: Meta = {
      seoTitle: 'Пользователи',
    }

    return {
      props: {
        meta,
        fallback: {
          [API_PATHS.users]: response,
        },
      },
      revalidate: 10
    }
  } catch (error) {
    return defineNextError(error)
  }
})

export default function UsersPage({ meta }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <SeoHead {...(meta as unknown as Meta)} />
      <Users />
    </Layout>
  )
}
