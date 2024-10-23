import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ROUTES } from 'api/paths'
import { Icon } from 'components/Icon'
import { useSession } from 'hooks'
import styles from './styles.module.scss'
import { LogoutButton } from '../LogoutButton'
import type { TopBarLink } from './types'

const links: TopBarLink[] = [
  {
    href: ROUTES.users,
    text: 'Пользователи',
    icon: { section: 'users', name: 'user' },
  },
  {
    href: ROUTES.profile,
    text: 'Мой профиль',
    icon: { section: 'general', name: 'profile-card' },
  },
]

export const Links = () => {
  const router = useRouter()
  const { session } = useSession()

  const isActiveLink = (link: string) => {
    const slugSubstring = router.pathname.match(/\[([^\]]+)\]/g)?.[0]
    if (!slugSubstring) {
      return router.pathname === link
    }

    return router.pathname.replace(`/${slugSubstring}`, '') === link
  }

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          prefetch={false}
          className={clsx(styles.linkItem, {
            [styles.active]: isActiveLink(link.href),
          })}
        >
          <Icon {...link.icon} iconStyles={styles.linkIcon} />
          <span>{link.text}</span>
        </Link>
      ))}
      {session?.isLoggedIn && <LogoutButton className={styles.linkItem} />}
    </div>
  )
}
