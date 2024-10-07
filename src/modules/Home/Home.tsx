import Image from 'next/image'

export const Home = () => {
  return (
    <div>
      <h1>Welcome to test)</h1>
      <Image src="/img/cat-dance.gif" alt='cat-dance' width={480} height={480} />
    </div>
  )
}
