import { useRouter } from 'next/router'
import { Button } from 'components/Button'
import { useSession } from 'hooks'
import type { LogoutButtonProps } from './types'

export const LogoutButton = ({ className }: LogoutButtonProps) => {
  const router = useRouter()
  const { logout } = useSession()

  const onLogout = async () => {
    await logout()
    // TODO: Костыльно, возможно можно получать новую сессию по другому
    router.reload()
  }

  return (
    <Button className={className} onClick={onLogout}>
      Выйти
    </Button>
  )
}
