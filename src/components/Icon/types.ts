import type { SVGProps } from 'react'

import { type SpritesMap } from './sprite.gen'

export type IconSize =
  | '80'
  | '76'
  | '68'
  | '64'
  | '60'
  | '52'
  | '50'
  | '48'
  | '40'
  | '32'
  | '24'
  | '20'
  | '16'
  | '12'
  | '8'

export interface IIconProps<T extends SpriteSections>
  extends SVGProps<SVGSVGElement> {
  section: T
  name: SpritesMap[T]
  size?: IconSize
  iconStyles?: string
  onClick?: () => void
}

export type SpriteSections = keyof SpritesMap
