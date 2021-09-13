import Image from 'next/image'
import html5 from '../public/html5.png'
import css3 from '../public/css3.png'
import js from '../public/js.png'
import react from '../public/react.png'
import wordpress from '../public/wordpress.png'

export default function TechStack() {
    return (
        <div className="tech-stack-container">
            <div className="tech-stack-item">
                <div className="tech-stack-item-image"><Image src={html5} alt="HTML 5"  /></div>
                <p className="tech-stack-item-label">HTML5</p>
            </div>
            <div className="tech-stack-item">
                <div className="tech-stack-item-image"><Image src={css3} alt="CSS 3"  /></div>
                <p className="tech-stack-item-label">CSS3</p>
            </div>
            <div className="tech-stack-item">
                <div className="tech-stack-item-image"><Image src={js} alt="JavaScript"  /></div>
                <p className="tech-stack-item-label">JavaScript</p>
            </div>
            <div className="tech-stack-item">
                <div className="tech-stack-item-image"><Image src={react} alt="React"  /></div>
                <p className="tech-stack-item-label">ReactJS</p>
            </div>
            <div className="tech-stack-item">
                <div className="tech-stack-item-image"><Image src={wordpress} alt="WordPress"  /></div>
                <p className="tech-stack-item-label">WordPress</p>
            </div>
            <style jsx>{`
        .tech-stack-container{
            display: flex;
            padding: 1rem;
            gap: 1rem;
            margin: 0 auto;
            width: 90%;
            justify-content: space-around;
            /* border: 1px solid red; */
        }
            .tech-stack-item{
                display: flex;
                flex-direction: column;
            }
            .tech-stack-item-image{
                margin: 0 auto;
                width: 30px; 
                height: 30px;
            }     
            .tech-stack-item-label{
                text-align: center;
                margin-top: .2rem;
                font-size: .9rem; // clamp??
            } 

            @media(min-width: 1025px){
            .tech-stack-container{
                width: 50%;
            }
            .tech-stack-item-image{
                width: 60px; 
                height: 60px;
            }   
        }       
        `}</style>
        </div >

    )
}