import { NextPageContext } from 'next'
import Head from 'next/head'

export function Error() {
  return (
    <>
      <Head>
        <title>Произошла ошибка!</title>
      </Head>
    </>
  )
}

Error.getInitialProps = ({}: NextPageContext) => {
  return { statusCode: 500 }
}

export default Error
