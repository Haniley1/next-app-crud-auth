import clsx from 'clsx'
import { SPRITES_META } from './sprite.gen'
import styles from './styles.module.scss'
import { IIconProps, SpriteSections } from './types'

export const Icon = <T extends SpriteSections>({
  iconStyles,
  name,
  section,
  size,
  onClick,
}: IIconProps<T>): JSX.Element => {
  const { filePath } = SPRITES_META[section] || {}

  return (
    <svg
      className={clsx(styles[`iconSize-${size}`], iconStyles)}
      onClick={onClick}
    >
      <use xlinkHref={`/sprites/${filePath}#${name}`} />
    </svg>
  )
}
