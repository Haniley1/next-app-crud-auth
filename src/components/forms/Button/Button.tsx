import clsx from 'clsx'
import type { DOMAttributes } from 'react'
import styles from './styles.module.scss'
import type { ButtonProps } from './types'

export const Button = (props: ButtonProps) => {
  return (
    <button {...props} className={clsx(styles.button, props.className)}>
      {props.children}
    </button>
  )
}
