import { useRouter } from 'next/router'
import type { MouseEvent } from 'react'
import { defaultSession } from 'api/session'
import { useSession } from 'hooks'

export const LogoutButton = ({ className }: { className: string }) => {
  const router = useRouter()
  const { session, logout } = useSession()

  const onLogout = async (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault()

    await logout(null, { optimisticData: defaultSession })
    router.reload()
  }

  if (!session.isLoggedIn) return null

  return <a className={className} onClick={onLogout} >Выйти</a>
}
