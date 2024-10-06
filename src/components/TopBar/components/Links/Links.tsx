import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { ROUTES } from 'api/paths'
import { Icon } from 'components/Icon'
import type { IIconProps, SpriteSections } from 'components/Icon/types'
import styles from './styles.module.scss'
import { LogoutButton } from '../LogoutButton'

interface TopBarLink {
  href: string
  icon: IIconProps<SpriteSections>
  text: ReactNode
}

export const Links = () => {
  const router = useRouter()

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

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          prefetch={false}
          className={clsx(styles.linkItem, {
            [styles.active]: router.pathname === link.href,
          })}
        >
          <Icon {...link.icon} iconStyles={styles.linkIcon} />
          <span>{link.text}</span>
        </Link>
      ))}
      <LogoutButton className={styles.linkItem} />
    </div>
  )
}
