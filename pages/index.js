import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Section from '../components/Section'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
       <div className={styles.container}>
      <Head>
        <title>Thomas P Chant Web Developer</title>
        <meta name="description" content="Thomas Chant Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/>
        <Section 
        backgroundColor="midnightblue"
        color="white">
          <Hero/>
          </Section>
        <Section 
        backgroundColor="white"
        color="#333">
          2
          </Section>
        <Section 
        backgroundColor="midnightblue"
        color="white">
          3
          </Section>
      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    </>
  )
}
