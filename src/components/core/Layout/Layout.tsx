import type { PropsWithChildren } from 'react'
import { Container, TopBar } from 'components'

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
