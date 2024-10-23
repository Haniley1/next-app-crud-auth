import { NextPageContext } from 'next'
import Head from 'next/head'

export function Error() {
  return (
    <>
      <Head>
        <title>Произошла ошибка!</title>
      </Head>
      <h1>Произошла критическая ошибка</h1>
    </>
  )
}

Error.getInitialProps = ({}: NextPageContext) => {
  return { statusCode: 500 }
}

export default Error
