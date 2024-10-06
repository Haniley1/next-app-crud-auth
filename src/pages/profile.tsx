import { getUser, type GetUserResponse } from "api/endpoints"
import { UserDetail } from "modules/UserDetail"
import type { GetServerSideProps, InferGetServerSidePropsType } from "next"

export const getServerSideProps = (async () => {
  // В реальном кейсе - получали бы данные пользака из токена авторизации или ID
  const userId = 5
  const response = await getUser(userId)

  return { props: response }
}) satisfies GetServerSideProps<GetUserResponse>

export default function ProfilePage({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <UserDetail user={data} />
  )
}
