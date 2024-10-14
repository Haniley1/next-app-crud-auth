import Image from 'next/image'
import type { User } from 'api/models'
import { fullname } from 'utils/string'

export const UserDetail = ({ user }: { user: User }) => {
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
