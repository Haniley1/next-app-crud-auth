import type { AppProps } from 'next/app'
import 'styles/main.scss'
import { SWRConfig } from 'swr'
import { NextFonts } from 'components/core'

export default function App({ Component, pageProps }: AppProps) {
  const { fallback = {} } = pageProps
  return (
    <SWRConfig value={{ fallback }}>
      <NextFonts />
      <Component {...pageProps} />
    </SWRConfig>
  )
}
