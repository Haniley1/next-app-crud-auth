import Head from 'next/head'
import { Home } from 'modules/Home'
import { Layout, SeoHead } from 'components/core'

export default function HomePage() {
  return (
    <>
      <SeoHead />
      <Layout>
        <Home />
      </Layout>
    </>
  )
}
