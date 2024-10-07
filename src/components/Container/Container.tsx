import clsx from 'clsx'
import styles from './styles.module.scss'
import type { ContainerProps } from './types'

export const Container = ({
  as: Tag = 'div',
  rootStyles,
  children,
  onClick,
}: ContainerProps) => {
  return (
    <Tag className={clsx(rootStyles, styles.container)} onClick={onClick}>
      {children}
    </Tag>
  )
}
