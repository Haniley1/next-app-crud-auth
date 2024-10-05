import type { AppProps } from 'next/app'
import 'styles/main.scss'
import { Layout, NextFonts } from 'components/core'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextFonts />
      {/* Знаю что Layout лучше рендерить не здесь, а в каждой странице. 
      Но для такого проекта и так сойдет) */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
