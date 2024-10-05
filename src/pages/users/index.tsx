import { getUsers } from 'api/endpoints'
import type { Meta } from 'api/models'
import { API_PATHS } from 'api/paths'
import { SeoHead } from 'components/core'
import { Users } from 'modules/Users'
import type { InferGetStaticPropsType } from 'next'

export async function getStaticProps() {
  const response = await getUsers()

  return {
    props: {
      fallback: {
        [API_PATHS.users]: response,
      },
    },
  }
}

export default function UsersPage({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  const meta: Meta = {
    seoTitle: 'Пользователи',
  }

  return (
    <>
      <SeoHead {...meta} />
      <Users />
    </>
  )
}
