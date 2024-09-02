import { CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <CssBaseline />
        <Head>
          <title>Autocomplte React.js</title>
        </Head>
        <Component {...pageProps} />
    </>
  )
}
