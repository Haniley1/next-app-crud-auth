export interface ISeoImage {
  src: string
  alt: string
}

export interface ISeoHeadProps {
  type?: string
  title: string
  detail_url?: string
  seo_title?: string
  seo_description?: string
  seo_keywords?: string
  seo_image?: ISeoImage | null
}
