import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Section from '../components/Section'
import Footer from '../components/Footer'
import Hero from '../section-blocks/Hero'
import Portfolio from '../section-blocks/Portfolio'
import About from '../section-blocks/About'
import History from '../section-blocks/History'

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
    <main className={styles.main}>
        <Section 
        backgroundColor="midnightblue"
        color="white">
          <Hero/>
          </Section>
        <Section 
        backgroundColor="white"
        color="#333"
        height="unset">
          <Portfolio/>
          </Section>
        <Section 
        backgroundColor="midnightblue"
        color="white">
          <History/>
          </Section>
        <Section 
        backgroundColor="white"
        color="#333">
          <About/>
          </Section>


      </main>

      <Footer/>
    </div>
    </>
  )
}
