import Head from 'next/head'
import { Meta } from 'api/models'

export const SeoHead = ({
  seoDescription,
  seoImage,
  seoTitle,
  seoKeywords,
}: Meta) => {
  return (
    <Head>
      {seoDescription && (
        <>
          <meta name="description" content={seoDescription} />
          <meta property="og:description" content={seoDescription} />
        </>
      )}

      {seoImage && <meta property="og:image" content={seoImage} />}

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
