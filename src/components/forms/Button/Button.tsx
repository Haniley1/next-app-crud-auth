import type { DOMAttributes } from 'react'
import styles from './styles.module.scss'
import type { ButtonProps } from './types'
import clsx from 'clsx'

export const Button = (props: ButtonProps) => {
  return (
    <button {...props} className={clsx(styles.button, props.className)}>
      {props.children}
    </button>
  )
}
