import { Icon } from 'components/Icon'
import Link from 'next/link'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import type { IIconProps } from 'components/Icon/types'
import type { ReactNode } from 'react'
import clsx from 'clsx'

interface TopBarLink {
  href: string
  icon: IIconProps<'general' | 'users'>
  text: ReactNode
}

const links: TopBarLink[] = [
  {
    href: '/users',
    text: 'Пользователи',
    icon: { section: 'users', name: 'user' },
  },
  {
    href: '/profile',
    text: 'Мой профиль',
    icon: { section: 'general', name: 'profile-card' },
  },
]

export const Links = () => {
  const router = useRouter()

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx('no-anchor-style', styles.linkItem, {
            [styles.active]: router.asPath === link.href,
          })}
        >
          <Icon {...link.icon} iconStyles={styles.linkIcon} />
          <span>{link.text}</span>
        </Link>
      ))}
    </div>
  )
}
