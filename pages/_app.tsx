import "../public/master.css"
import "../public/grid.css"
import type { AppProps } from 'next/app'
import Layout from "../components/Layout/Layout"
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}

export default MyApp
