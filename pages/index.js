import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tabletop Tools</title>
        <meta name="description" content="Coming soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.MarqueeTxt}>
          WATCH THIS SPACE
        </div>
      </main>
    </div>
  )
}
