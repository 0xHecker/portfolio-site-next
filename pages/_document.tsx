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
          <link rel="preload" as="image" href="/blob_bg.png" />
          <link rel="preload" as="image" href="/chicken/01.webp" />
          {process.env.NODE_ENV === 'production' && (
            <script async defer data-website-id="cae51d94-6683-4a9b-98dd-1a42e56fbf9f" src="https://umami-dup.vercel.app/umami.js"></script>
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
