import type { AppProps } from 'next/app'
import 'styles/main.scss'
import { SWRConfig } from 'swr'
import { NextFonts } from 'components/core'
import Error from './_error'

export default function App({ Component, pageProps }: AppProps) {
  const { fallback = {}, isError500 = false } = pageProps

  return (
    <SWRConfig value={{ fallback }}>
      <NextFonts />
      {isError500 && <Error />}
      {!isError500 && <Component {...pageProps} />}
    </SWRConfig>
  )
}
