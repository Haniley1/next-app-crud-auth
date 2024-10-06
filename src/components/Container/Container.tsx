import clsx from 'clsx'
import { FunctionComponent, PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import type { ContainerProps } from './types'

export const Container: FunctionComponent<
  PropsWithChildren<ContainerProps>
> = ({ as: Tag = 'div', rootStyles, children, onClick }): JSX.Element => {
  return (
    <Tag className={clsx(rootStyles, styles.container)} onClick={onClick}>
      {children}
    </Tag>
  )
}
