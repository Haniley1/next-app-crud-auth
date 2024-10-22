import clsx from 'clsx'
import styles from './styles.module.scss'
import type { ContainerProps } from './types'

export const Container = ({
  rootStyles,
  children,
  onClick,
}: ContainerProps) => {
  return (
    <div className={clsx(rootStyles, styles.container)} onClick={onClick}>
      {children}
    </div>
  )
}
