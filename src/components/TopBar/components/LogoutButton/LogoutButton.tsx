import { useRouter } from 'next/router'
import type { MouseEvent } from 'react'
import { ROUTES } from 'api/paths'
import { defaultSession } from 'api/session'
import { useSession } from 'hooks'

export const LogoutButton = ({ className }: { className: string }) => {
  const router = useRouter()
  const { session, logout } = useSession()

  const onLogout = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault()
    router.push(ROUTES.home)
    logout(null, { optimisticData: defaultSession })
  }

  if (!session.isLoggedIn) return null

  return <a className={className} onClick={onLogout} children="Выйти" />
}
