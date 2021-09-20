import Head from 'next/head'
import Header from '../components/Header'
import {useState, useEffect} from 'react'

export default function Vlog(props){

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
        if(window.innerWidth <= mobileWidth){
          setIsMobile(true)
        }
        else{
          setIsMobile(false)
        }
  }
  
      window.addEventListener('resize', handleResize)
    })



    return(
            <>
              <Head>
                <title>Thomas P Chant Web Developer</title>
                <meta name="description" content="Thomas Chant Portfolio" />
                <link rel="icon" href="/favicon.ico" />
              </Head>
            <Header isMobile={props.isMobile}/>
            <main className="main-container">

            </main>
            <style jsx>{`
            .main-container{
                background: darkblue;
                height: 100vh;
            }
            `}</style>
            </>
    )
}