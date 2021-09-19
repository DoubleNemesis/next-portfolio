import { useState, useEffect } from 'react'
import data from '../data/data'

export default function Portfolio() {

    const [projects, setProjects] = useState('loading...')

    const ProjectItem = ({ children }) => {
        return (
            <>
                <div className="project-block">{children}</div>
                <style jsx>{`
                .project-block{
                    color: #333;
                    width: auto;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
            </>
        )
    }

    const ProjectItemText = ({ children }) => {
        return (
            <div>
                {children}
            </div>
        )
    }

    const projectsToDisplay = data['projects'].map((item, index) => {
        return (
                <ProjectItem key={item.key}>
                    <div className="flip-box" aria-haspopup="true">
                        <div className="flip-box-inner" >
                            <div className="flip-box-front" >
                                <img src={item.imageUrl} />
                            </div>
                            <div className="flip-box-back">
                                <div>{item.flipsSideText}</div>
                            </div>
                        </div>
                    </div>
                    <ProjectItemText>
                        <div className="portfolio-text">
                            <h2 className="item-title"><a href={item.projectUrl}>{item.projectName}</a></h2>
                            <div className="item-details">
                            <p>{item.projectType}</p>
                            {item.githubLink ? <p><a href={item.githubLink}><i className="fab fa-github"></i></a></p> : null}
                            </div>
                        </div>
                    </ProjectItemText>
                </ProjectItem>
        )

    })


    return (
        <>
            <div className="portfolio-container" id="portfolio-scroll-target-two">
                {projectsToDisplay}
            </div>
            <div id="history-scroll-target"></div>
            <style jsx>{`
            .portfolio-container{
                position: relative;
                max-width: 100%;
                margin: 0 auto;
                display: grid;
                grid-gap: 0rem;
                grid-template-columns: repeat(auto-fit, minmax(319.8px, 1fr));
                padding: 0;
            } 
            @media(min-width: 1025px){
                .portfolio-container{
                grid-template-columns: repeat(auto-fit, minmax(379.8px, 1fr));
                padding: 0;
            } 
}
            `}</style>
        </>
    )
}