import TechStack from '../widgets/TechStack'
import ScrollButton from '../utils/ScrollButton'
import desk from '../public/desk.jpg'

export default function Hero(props) {

    const name = `Thomas P Chant`
    const headline = `<Frontend Developer/>`

    return (
        <>
            <div className="hero-overlay"></div>
            <div className="hero-text-layer">
            <div className="hero-container">
                <h1><span className="emphatic">Thomas</span>P<span className="emphatic">Chant</span></h1>
                <h2><span className="emphatic">{headline}</span></h2>
                <TechStack />
                <ScrollButton
                    destination="portfolio-scroll-target"
                    text="View Projects"
                />
            </div>
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
                filter: grayscale(1) brightness(.7);
                min-height: 100%;
                width: 100%; 
                opacity: .1;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                padding-bottom: 4rem; 
                color: white;
            }
            .hero-text-layer{
                position: absolute;
                top: 0;
                left: 0;
                min-height: 100%;
                width: 100%; 
                display: flex;
                align-items: center;
                justify-content: center;
                padding-bottom: 0rem; 
                color: white;
            }
            .hero-container{
                display: flex;
                flex-direction: column;
                min-height: 100%;
                width: 100%;
                align-items: center;
                justify-content: space-between;
                color: white;
                /* border: 1px solid green; */
            }
            .hero-container h1 {
                font-size: clamp(2rem, -0.875rem + 8.333vw, 3rem);
            } 
       
            `}</style>
        </>
    )
}