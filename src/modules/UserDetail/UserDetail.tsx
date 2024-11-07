import Image from 'next/image'
import { Loader } from 'components/Loader'
import { fullname } from 'utils/string'
import { useUserDetail } from './hooks/useUserDetail'

export const UserDetail = () => {
  const { data, isLoading } = useUserDetail()

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
