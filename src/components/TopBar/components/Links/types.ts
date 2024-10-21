import type { ReactNode } from "react"
import type { IconProps, SpriteSections } from "components/Icon/types"

export interface TopBarLink {
  href: string
  icon: IconProps<SpriteSections>
  text: ReactNode
}
