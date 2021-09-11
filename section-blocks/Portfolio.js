export default function Portfolio() {
    return (
        <>
            <div className="portfolio-container">
                <div className="project-block">project</div>
                <div className="project-block">project</div>
                <div className="project-block">project</div>
                <div className="project-block">project</div>
                <div className="project-block">project</div>
                <div className="project-block">project</div>
            </div>
            <style jsx>{`
            .portfolio-container{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                min-height: 100%;
                width: 100%;
                align-items: center;
                justify-content: center;
                color: white;
                border: 1px solid red;
                padding: 0;
                align-content: center;
            } 
            .project-block{
                color: #333;
                border: 1px solid green;
                min-width: 300px;
                max-width: 100%;
                min-height: 300px;
                margin: 0;
            }
            @media(min-width:1025px){
                .portfolio-container{
                gap: .2rem;
            } 
                .project-block{
                    min-width: 350px;
                    min-height: 300px;
            }  
            }          
            `}</style>
        </>
    )
}