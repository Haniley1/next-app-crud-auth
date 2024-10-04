import { Layout as AntLayout, Menu } from 'antd'
import Link from 'next/link'

export const TopBar = () => {
  return (
    <AntLayout.Header>
      <Menu mode="horizontal">
        <Menu.Item key="/">
          <Link href="/" children="test" />
        </Menu.Item>
        <Menu.Item key="/profile">
          <Link href="/profile" children="test" />
        </Menu.Item>
      </Menu>
    </AntLayout.Header>
  )
}
