import Footer from '@/cmps/footer'
import Header from '@/cmps/header'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Travel Agency</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
