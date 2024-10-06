import { getUser, getUsers, type GetUserResponse } from 'api/endpoints'
import type { Meta, User } from 'api/models'
import { API_PATHS } from 'api/paths'
import { SeoHead } from 'components/core'
import { UserDetail } from 'modules/UserDetail'
import type {
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
} from 'next'
import { unstable_serialize } from 'swr'
import type { ParamsStatic } from 'types'
import { defineNextError } from 'utils/defineNextError'
import { fullname } from 'utils/string'

export const getStaticPaths = (async () => {
  const response = await getUsers()

  try {    
    const paths = response.data.map((item) => ({
      params: { id: item.id.toString() },
    }))
  
    return { paths, fallback: false }
  } catch (error) {
    return { paths: [], fallback: 'blocking' }
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async (context) => {
  const { id } = context.params as ParamsStatic

  try {
    const response = await getUser(id)

    return {
      props: {
        user: response,
        fallback: {
          [unstable_serialize([API_PATHS.users, id])]: response,
        },
      },
    }
  } catch (error) {
    return {
      ...defineNextError(error),
      props: { user: {} as GetUserResponse },
    }
  }
}) satisfies GetStaticProps

export default function UsersPage({
  user,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const meta: Meta = {
    seoTitle: `Пользователь ${fullname(user.data.first_name, user.data.last_name)}`,
  }

  return (
    <>
      <SeoHead {...meta} />
      <UserDetail user={user.data} />
    </>
  )
}
