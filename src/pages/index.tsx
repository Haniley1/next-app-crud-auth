import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import type { Meta } from 'api/models'
import { Layout, SeoHead } from 'components/core'
import { Home } from 'modules/Home'

export const getStaticProps: GetStaticProps = (() => {
  const meta: Meta = {
    seoTitle: 'Главная',
  }

  return { props: { meta } }
}) satisfies GetStaticProps

export default function HomePage({
  meta,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <SeoHead {...meta} />
      <Home />
    </Layout>
  )
}
