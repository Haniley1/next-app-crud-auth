import type { AppProps } from 'next/app'
import 'styles/main.scss'
import { Layout, NextFonts } from 'components/core'
import { SWRConfig } from 'swr'

export default function App({ Component, pageProps }: AppProps) {
  const { fallback = {} } = pageProps
  return (
    <SWRConfig value={{ fallback }}>
      <NextFonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}
