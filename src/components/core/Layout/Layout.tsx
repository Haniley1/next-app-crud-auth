import type { PropsWithChildren } from 'react'
import { Container } from 'components/Container'
import { TopBar } from 'components/TopBar'

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
