import Layout from '../components/Layout.js'
import '../styles/globals.css'
import '../styles/addPlant.css'
import '../styles/plantCards.css'
import '../styles/timeline.css'
import type { AppProps } from 'next/app'
//we can wrap a layout around all of this
import { ContextProvider } from '../components/Context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
    </Layout>
   </ContextProvider>
  )
}
