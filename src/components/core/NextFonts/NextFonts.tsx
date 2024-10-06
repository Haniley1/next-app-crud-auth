import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
})

export const NextFonts = () => {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <style jsx global>{`
      :root {
        --font-base: ${roboto.style.fontFamily};
      }
    `}</style>
  )
}
