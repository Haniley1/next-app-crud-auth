import type {
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
} from 'next'
import { unstable_serialize } from 'swr'
import { getUser, getUsers } from 'api/endpoints'
import { KEYS } from 'api/keys'
import type { Meta } from 'api/models'
import { Layout, SeoHead } from 'components/core'
import { UserDetail } from 'modules/UserDetail'
import type { ParamsStatic } from 'types'
import { REVALIDATE_COUNT } from 'utils/constants'
import { defineNextError } from 'utils/defineNextError'
import { fullname } from 'utils/string'

export const getStaticPaths = (async () => {
  try {
    const response = await getUsers()

    const paths = response.data.map((item) => ({
      params: { id: item.id.toString() },
    }))

    return { paths, fallback: false }
  } catch (error) {
    return { paths: [], fallback: 'blocking' }
  }
}) satisfies GetStaticPaths

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as ParamsStatic

  try {
    const response = await getUser(id)
    const meta: Meta = {
      seoTitle: `Пользователь ${fullname(response.data)}`,
    }

    return {
      revalidate: REVALIDATE_COUNT,
      props: {
        meta,
        fallback: {
          // Здесь необязательно использовать SWR, но просто показываю как можно
          // закешировать данные для SWR с серверной стороны
          [unstable_serialize(KEYS.users.detail(id))]: response,
        },
      },
    }
  } catch (error) {
    return defineNextError(error)
  }
}

export default function UsersPage({
  meta,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <SeoHead {...meta} />
      <UserDetail  />
    </Layout>
  )
}
