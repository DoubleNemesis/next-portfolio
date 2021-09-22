import TechStack from '../widgets/TechStack'
import ScrollButton from '../utils/ScrollButton'

export default function Hero() {
    return (
        <>
            <div className="hero-container">
                <h1>Thomas P Chant</h1>
                <h2>Frontend Developer</h2>
                <TechStack />
                <ScrollButton 
                destination="portfolio-scroll-target"
                text="View Projects"
                />
                <div id="portfolio-scroll-target"></div>
            </div>
            <style jsx>{`

            .hero-container{
                display: flex;
                flex-direction: column;
                min-height: 100%;
                width: 100%;
                align-items: center;
                justify-content: center;
                color: white;
                padding-top: 3rem;
            }
            .hero-container h1 {
                font-size: clamp(2rem, -0.875rem + 8.333vw, 3rem);
            } 
            @media(min-height: 700px){
                padding-top: 0rem;

            }         
            `}</style>
        </>
    )
}