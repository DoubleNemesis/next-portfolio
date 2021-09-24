import TechStack from '../widgets/TechStack'
import ScrollButton from '../utils/ScrollButton'
import desk from '../public/desk.jpg'

export default function Hero(props) {

    const name = `Thomas P Chant`
    const headline = `<Frontend Developer/>`

    return (
        <>
            <div className="hero-overlay"></div>
            <div className="button-overlay">
            <ScrollButton 
                destination="portfolio-scroll-target"
                text="View Projects"
                />
            </div>
            <div className="hero-container">
                <h1>{name}</h1>
                <h2>{headline}</h2>
                <TechStack />


            </div>
            <style jsx>{`
            .hero-overlay{
                position: absolute;
                top: 0;
                left: 0;
                background-image: url('https://www.tomsclassroom.com/tree.jpg');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                filter: grayscale(1);
                min-height: 100%;
                width: 100%; 
                opacity: .3;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                padding-bottom: 4rem; 
                color: white;
            }
            .button-overlay{
                position: absolute;
                top: 0;
                left: 0;
                min-height: 100%;
                width: 100%; 
                display: flex;
                align-items: flex-end;
                justify-content: center;
                padding-bottom: 4rem; 
                color: white;
            }
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