import type { GetStaticProps } from 'next'
import type { Meta } from 'api/models'
import { Layout, SeoHead } from 'components/core'
import { Home } from 'modules/Home'

export const getStaticProps = (() => {
  return { props: {} }
}) satisfies GetStaticProps

export default function HomePage() {
  const meta: Meta = {
    seoTitle: 'Главная',
  }

  return (
    <Layout>
      <SeoHead {...meta} />
      <Home />
    </Layout>
  )
}
