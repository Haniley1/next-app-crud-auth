import type { Meta } from 'api/models'
import { Layout, SeoHead } from 'components/core'
import { Login } from 'modules/Login'

export default function LoginPage() {
  const meta: Meta = {
    seoTitle: 'Страница авторизации',
  }

  return (
    <Layout>
      <SeoHead {...meta} />
      <Login />
    </Layout>
  )
}
