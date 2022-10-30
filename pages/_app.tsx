import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Script from 'next/script'
import { Toaster } from 'react-hot-toast'

import SEO from '../components/seo'
import '../styles/globals.scss'
import BackToTopButton from 'components/BackToTopButton'
function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()

  return (
    <ThemeProvider defaultTheme="light">
      <SEO />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Script
        id="recaptcha"
        src="https://www.google.com/recaptcha/api.js"
        onError={e => {
          console.error('Script failed to load', e)
        }}
      />
      <Toaster position="top-right" reverseOrder={false} />
      <BackToTopButton />
      <AnimatePresence initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
