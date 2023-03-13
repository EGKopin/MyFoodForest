import Layout from '../components/Layout.js'
import '../styles/globals.css'
import '../styles/addPlant.css'
import type { AppProps } from 'next/app'
//we can wrap a layout around all of this

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
     <Component {...pageProps} />
   </Layout>
  )
}
