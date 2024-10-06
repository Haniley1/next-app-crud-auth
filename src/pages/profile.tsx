import { getUser } from 'api/endpoints'
import type { Meta, User } from 'api/models'
import { SeoHead } from 'components/core'
import { UserDetail } from 'modules/UserDetail'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { defineNextError } from 'utils/defineNextError'
import { fullname } from 'utils/string'

export const getServerSideProps = (async () => {
  // В реальном кейсе - получали бы данные пользака из токена авторизации или ID
  const userId = 5

  try {
    const response = await getUser(userId)

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
    <>
      <SeoHead {...meta} />
      <UserDetail user={data} />
    </>
  )
}
