import type { AppProps } from 'next/app'
import 'styles/main.scss'
import { NextFonts } from 'components/core'
import { ConfigProvider as AntConfigProvider } from 'antd'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AntConfigProvider>
      <NextFonts />
      <Component {...pageProps} />
    </AntConfigProvider>
  )
}
