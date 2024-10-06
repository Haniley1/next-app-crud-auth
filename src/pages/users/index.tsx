import { getUsers } from 'api/endpoints'
import type { Meta } from 'api/models'
import { API_PATHS } from 'api/paths'
import { Layout, SeoHead } from 'components/core'
import { Users } from 'modules/Users'
import { defineNextError } from 'utils/defineNextError'

export async function getStaticProps() {
  try {
    const response = await getUsers()

    return {
      props: {
        fallback: {
          [API_PATHS.users]: response,
        },
      },
    }
  } catch (error) {
    return defineNextError(error)
  }
}

export default function UsersPage() {
  const meta: Meta = {
    seoTitle: 'Пользователи',
  }

  return (
    <Layout>
      <SeoHead {...meta} />
      <Users />
    </Layout>
  )
}
