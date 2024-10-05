import { Container, TopBar } from 'components'
import type { PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <TopBar />
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  )
}
