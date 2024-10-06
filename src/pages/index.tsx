import { Home } from 'modules/Home'
import { SeoHead } from 'components/core'
import type { Meta } from 'api/models'
import type { GetStaticProps } from 'next'

export const getStaticProps = (() => {
  return { props: {} }
}) satisfies GetStaticProps

export default function HomePage() {
  const meta: Meta = {
    seoTitle: 'Главная',
  }

  return (
    <>
      <SeoHead {...meta} />
      <Home />
    </>
  )
}
