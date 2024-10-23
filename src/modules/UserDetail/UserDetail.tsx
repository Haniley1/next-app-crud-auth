import Image from 'next/image'
import useSWR from 'swr'
import { GetUserResponse } from 'api/endpoints'
import { Loader } from 'components/Loader'
import { fullname } from 'utils/string'

export const UserDetail = ({ dataKey }: { dataKey: string }) => {
  const { data, isLoading } = useSWR<GetUserResponse>(dataKey)

  if (!data || isLoading) {
    return <Loader />
  }

  const user = data.data

  return (
    <div>
      {user.avatar && (
        <Image src={user.avatar} width={384} height={384} alt="avatar" />
      )}
      <h1>{fullname(user)}</h1>
      <span>{user.email}</span>
    </div>
  )
}
