import type { UserCardProps } from './types'
import styles from './styles.module.scss'
import Link from 'next/link'
import { ROUTES } from 'api/paths'
import Image from 'next/image'
import { Button } from 'components/forms'
import clsx from 'clsx'
import { Icon } from 'components'
import { fullname } from 'utils/string'

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
          <h3>{fullname(user.first_name, user.last_name)}</h3>
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
