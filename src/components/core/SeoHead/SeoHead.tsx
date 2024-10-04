import Head from 'next/head'
import { FunctionComponent } from 'react'
import { Meta } from 'api/models'

export const SeoHead: FunctionComponent<Meta> = ({
  seoDescription,
  seoImage,
  seoTitle,
  seoKeywords,
}): JSX.Element => {
  return (
    <Head>
      {seoDescription && (
        <>
          <meta name="description" content={seoDescription} />
          <meta property="og:description" content={seoDescription} />
        </>
      )}

      {seoImage && <meta property="og:image" content={seoImage.src} />}

      {seoTitle && (
        <>
          <title>{seoTitle}</title>
          <meta property="og:title" content={seoTitle} />
        </>
      )}

      {seoKeywords && (
        <>
          <meta name="keywords" content={seoKeywords} />
        </>
      )}
    </Head>
  )
}
