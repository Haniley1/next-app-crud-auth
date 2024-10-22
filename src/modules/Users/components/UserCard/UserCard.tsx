import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { ROUTES } from 'api/paths'
import { Icon } from 'components'
import { Button } from 'components/Button'
import { fullname } from 'utils/string'
import styles from './styles.module.scss'
import type { UserCardProps } from './types'

export const UserCard = ({ user, onDelete }: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <Link href={ROUTES.userDetail(user.id)} prefetch={false}>
        <div className={styles.innerContainer}>
          <div className={styles.avatarWrapper}>
            {user.avatar && (
              <Image
                className={styles.avatar}
                width={168}
                height={168}
                src={user.avatar}
                alt="avatar"
              />
            )}
          </div>
          <h3>{fullname(user)}</h3>
          <span>{user.email}</span>
        </div>
      </Link>
      <Button
        className={clsx(styles.deleteButton, styles.button)}
        type="button"
        onClick={() => onDelete?.(user.id)}
      >
        <Icon section="general" name="trash" iconStyles={styles.deleteIcon} />
      </Button>
    </div>
  )
}
