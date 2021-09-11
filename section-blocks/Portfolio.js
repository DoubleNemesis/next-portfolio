import { useState, useEffect } from 'react'
import data from '../data/data'

export default function Portfolio() {

    const [projects, setProjects] = useState('loading...')

    const ProjectItem = ({children}) =>{
        return(
            <>
            <div className="project-block">{children}</div>
            <style jsx>{`
                .project-block{
                    color: #333;
                    border: 1px solid #999;
                    min-width: 300px;
                    max-width: 100%;
                    min-height: 300px;
                    margin: 0;
                }
                .title{
                    font-size: 1rem;
                    color: red;
                }
            @media(min-width:1025px){
                .project-block{
                    min-width: 350px;
                    min-height: 300px;
            }  
            }         
            `}</style>
            </>

        ) 
    }

        const projectsToDisplay = data['projects'].map((item, index)=>{
            return <ProjectItem key={item.key}>
        <div className="flip-box" aria-haspopup="true">
          <div className="flip-box-inner" >
            <div className="flip-box-front" >
                <img src={item.imageUrl}/>
            </div>
            <div className="flip-box-back">
              <div>{item.flipsSideText}</div>
            </div>
          </div>
        </div>


                <h2 className="item-title"><a href={item.projectUrl}>{item.projectName}</a></h2>
                <p>{item.projectType}</p>
                {item.githubLink ? <a href={item.githubLink}><i className="fab fa-github"></i></a> : null}
                </ProjectItem>
        })

    
    return (
        <>
            <div className="portfolio-container">
                {projectsToDisplay}
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