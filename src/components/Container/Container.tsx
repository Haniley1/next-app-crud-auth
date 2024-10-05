import { FunctionComponent, PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import type { ContainerProps } from './types'
import clsx from 'clsx'

export const Container: FunctionComponent<
  PropsWithChildren<ContainerProps>
> = ({ as: Tag = 'div', rootStyles, children, onClick }): JSX.Element => {
  return (
    <Tag className={clsx(rootStyles, styles.container)} onClick={onClick}>
      {children}
    </Tag>
  )
}
