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
          <link rel="preload" as="image" href="/chicken/01.gif" />
          <link rel="preload" as="image" href="/chicken/02.gif" />
          <link rel="preload" as="image" href="/chicken/03.gif" />
          <link rel="preload" as="image" href="/chicken/04.gif" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
