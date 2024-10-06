import { GetUserResponse } from 'api/endpoints'
import type { User } from 'api/models'
import { API_PATHS } from 'api/paths'
import Image from 'next/image'
import useSWR from 'swr'
import { fullname } from 'utils/string'

export const UserDetail = ({ id }: Pick<User, 'id'>) => {
  const { data, isLoading } = useSWR<GetUserResponse>([API_PATHS.users, id])

  if (!data || isLoading) {
    return <div>Loading...</div>
  }

  const user = data.data

  return (
    <div>
      {user.avatar && (
        <Image
          src={user.avatar}
          width={384}
          height={384}
          alt="avatar"
          priority
        />
      )}
      <h1>{fullname(user.first_name, user.last_name)}</h1>
      <span>{data?.data.email}</span>
    </div>
  )
}
