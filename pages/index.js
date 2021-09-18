import { useEffect, useState } from 'react'
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
import PhotoBlock from '../section-blocks/PhotoBlock'

export default function Home() {

  const [isMobile, setIsMobile] = useState(false)

  const mobileWidth = 700;

  useEffect(()=>{
    console.log(window.screen.width)
    if(window.screen.width <= mobileWidth){
      setIsMobile(true)
    }
})

useEffect(() => {
    function handleResize() {
      // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
      if(window.innerWidth <= mobileWidth){
        setIsMobile(true)
      }
      else{
        setIsMobile(false)
      }
}

    window.addEventListener('resize', handleResize)
  })

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
        color="white"
        height="unset">
          <History/>
          </Section>
          <PhotoBlock isMobile={isMobile}/>
        <Section 
        backgroundColor="midnightblue"
        color="white"
        height="unset">
          <About/>
          </Section>


      </main>

      <Footer/>
    </div>
    </>
  )
}
