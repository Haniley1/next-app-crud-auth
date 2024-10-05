import type { Meta } from 'api/models'
import { SeoHead } from 'components/core'
import { Users } from 'modules/Users'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps = (async (context) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  return { props: { repo }, revalidate: 10 }
}) satisfies GetStaticProps<{ repo: any }>

export default function UsersPage({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  const meta: Meta = {
    seoTitle: 'Пользователи',
  }

  return (
    <>
      <SeoHead {...meta} />
      <Users />
    </>
  )
}
