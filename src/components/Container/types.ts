import { type PropsWithChildren } from 'react'

export interface ContainerProps extends PropsWithChildren {
  rootStyles?: string
  onClick?: VoidFunction
}
