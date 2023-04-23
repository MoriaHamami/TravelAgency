import Head from 'next/head'
// import Image from 'next/image'
// import styles from '@/styles/Home.module.css'
import HomePage from './home-page'

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Travel Agency</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet" /> */}
        {/* <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" /> */}
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,0" /> */}
      </Head>
      <main>
        <HomePage data={data}/>
        {/* <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div> */}
      </main>
    </>
  )
}
