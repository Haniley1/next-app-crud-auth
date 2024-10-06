import { GetUserResponse } from 'api/endpoints'
import type { User } from 'api/models'
import { API_PATHS } from 'api/paths'
import Image from 'next/image'
import useSWR from 'swr'
import { fullname } from 'utils/string'

export const UserDetail = ({ user }: { user: User }) => {
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
      <span>{user.email}</span>
    </div>
  )
}
