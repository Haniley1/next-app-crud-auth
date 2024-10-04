import { Layout as AntLayout } from 'antd'
import { TopBar } from 'components'
import type { PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <AntLayout>
      <TopBar />
      <AntLayout.Content>{children}</AntLayout.Content>
      <AntLayout.Footer></AntLayout.Footer>
    </AntLayout>
  )
}
