import Footer from '@/cmps/footer'
import Header from '@/cmps/header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
