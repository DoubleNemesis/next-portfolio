import { useState, useEffect } from 'react'


export const Block = ({ children, ...props }) => {
    return (
        <div className="text-block">
            <div id={props.id}>{children}</div>
            <style jsx>{`
               .text-block{
                display: flex;
                align-items: center;
                justify-content: center;
                background: ${props.bgColor};
                max-height: 500px;
                max-width: 25%;
                min-width: 25%;
                 }
            `}</style>
        </div>
    )
}

export default function AnimatedText({message, bgColor}){

    const [mess, setMess] = useState('')

    useEffect(()=>{
                let counter=0
                const interval = setInterval(()=>{
                    setMess(prev => prev + message[counter])
                    console.log(message[counter]);
                    counter++
                    if (counter >= message.length){
                        clearInterval(interval)
                    }
                },20)
                return ()=> clearInterval(interval)
    },[])
    return(
        <>
        <Block bgColor={bgColor}>
        <div className="photo-block-text">
            <h3>{mess}</h3>
        </div>
        </Block>
        <style jsx>{`
        .photo-block-text{
            max-width: 80%;
            min-height: 80%;   
            width: 80%;
            height: 80%;  
            margin: 0 auto; 
            /* transform: rotate(-30deg) */
        }
        .photo-block-text h3{
            font-family: cursive;
            font-weight: 100;
            font-size: 1.3rem;
        }
        `}</style>
        </>
    )
}

