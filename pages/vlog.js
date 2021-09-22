import Head from 'next/head'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import blogData from '../data/blogData'

export default function Vlog(props) {

  const [isMobile, setIsMobile] = useState(false)
  const mobileWidth = 700;

  useEffect(() => {
    console.log(window.screen.width)
    if (window.screen.width <= mobileWidth) {
      setIsMobile(true)
    }
  })

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= mobileWidth) {
        setIsMobile(true)
      }
      else {
        setIsMobile(false)
      }
    }
    window.addEventListener('resize', handleResize)
  })


  const videosToDisplay = blogData['entries'].map((item, index) => {
    const srcToAdd = `https://www.youtube.com/embed/${item.embedCode}`
    return (
      <div className="video-item" key={item.key}>
        <h2 className="video-item-name">{item.name}</h2>
        <iframe src={srcToAdd} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <style jsx>{`
        .video-item{
          display: flex;
          flex-direction: column;
          width: 340px;
          margin: 1rem auto;
          border: 1px solid skyblue;
          padding: 1rem;
        }
        h2{
          font-size: 1rem;
        }
        `}</style>
      </div>
    )
  })

  return (
    <>
      <Head>
        <title>Thomas P Chant Web Developer</title>
        <meta name="description" content="Thomas Chant Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isMobile={isMobile} />
      <main className="main-container">
        <section className="vlog-container">
          {videosToDisplay}
        </section>
      </main>
      <style jsx>{`
            .main-container{
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              background: darkblue;
              color: white;
              /* border: 1px solid white; */
              width: 100%;
            }
            .vlog-container{
              display: flex;
              flex-wrap: wrap;
              margin: 6rem auto 3rem auto;
              width: 100%;
            }
            @media(min-width:1025px){
              .vlog-container{
              width: 80%;
            }
            }
            `}</style>
    </>
  )
}