import { Html, Head, Main, NextScript } from 'next/document'

import { Providers } from '@/context/Providers';


export default function Document() {
  return (
    <Providers>
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    </Providers>
  )
}
