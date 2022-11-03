import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link href="https://github.com/0xHecker" rel="me" />
          <link rel="preload" href="/fonts/outfit-v4-latin-500.woff2" as="font" type="font/woff" crossOrigin="" />
          <link rel="preload" href="/fonts/outfit-v4-latin-700.woff2" as="font" type="font/woff" crossOrigin="" />
          <link rel="preload" href="/fonts/outfit-v4-latin-regular.woff2" as="font" type="font/woff" crossOrigin="" />
          <link rel="preload" as="image" href="/blob_bg.webp" />
          <link rel="icon" type="image/x-icon" href="/avatar.svg" />
          <meta property="og:image" content="https://shanmukh.xyz/api/og" />

          {process.env.NODE_ENV === 'production' && (
            <script async defer data-website-id="fc557f84-dc3e-459f-af7c-c1a7ea34fc8a" src="https://umami-dup.vercel.app/umami.js"></script>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
