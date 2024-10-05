import Head from 'next/head'
import { Home } from 'modules/Home'
import { Layout, SeoHead } from 'components/core'
import type { Meta } from 'api/models'

const meta: Meta = {
  seoTitle: 'Главная',
}

export default function HomePage() {
  return (
    <>
      <SeoHead {...meta} />
      <Home />
    </>
  )
}
