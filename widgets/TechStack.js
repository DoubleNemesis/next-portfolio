import Image from 'next/image'


export default function TechStack() {
    return (
        <div className="tech-stack-container">
            <div className="tech-stack-item">
                <div className="tech-stack-item-image"><Image src="/html5.png" alt="HTML 5" width="60px" height="60px" /></div>
                <p className="tech-stack-item-label">HTML5</p>
            </div>
            <div className="tech-stack-item">
                <div className="tech-stack-item-image"><Image src="/css3.png" alt="CSS 3" width="60px" height="60px" /></div>
                <p className="tech-stack-item-label">CSS3</p>
            </div>
            <div className="tech-stack-item">
                <div className="tech-stack-item-image"><Image src="/js.png" alt="JavaScript" width="60px" height="60px" /></div>
                <p className="tech-stack-item-label">JavaScript</p>
            </div>
            <div className="tech-stack-item">
                <div className="tech-stack-item-image"><Image src="/react.png" alt="React" width="60px" height="60px" /></div>
                <p className="tech-stack-item-label">ReactJS</p>
            </div>
            <div className="tech-stack-item">
                <div className="tech-stack-item-image"><Image src="/wordpress.png" alt="WordPress" width="60px" height="60px" /></div>
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
        }
        @media(min-width: 1025px){
            .tech-stack-container{
                width: 50%;
            }
        }
            .tech-stack-item{
                display: flex;
                flex-direction: column;
            }
            .tech-stack-item-image{
                margin: 0 auto;
            }     
            .tech-stack-item-label{
                text-align: center;
                margin-top: 0;
            }        
        `}</style>
        </div >

    )
}