import { ElementType, type PropsWithChildren } from 'react'

export interface ContainerProps extends PropsWithChildren {
  rootStyles?: string
  as?: ElementType
  type?: 'banner' | 'detailContainer'
  html?: string
  onClick?: () => void
}
