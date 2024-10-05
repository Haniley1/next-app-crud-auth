import { ElementType } from 'react'

export interface ContainerProps {
  rootStyles?: string
  as?: ElementType
  type?: 'banner' | 'detailContainer'
  html?: string
  onClick?: () => void
}
