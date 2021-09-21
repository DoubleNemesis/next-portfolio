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
                max-width: 100%;
                min-width: 100%;
                 }
                 @media(min-width:700px){
                    .text-block{
                        max-width: 25%;
                        min-width: 25%;   
                    }  
                 }
            `}</style>
        </div>
    )
}

export default function TextBlock({ message, bgColor }) {

    return (
        <>
            <Block bgColor={bgColor}>
                <div className="photo-block-text">
                    <h3>{message}</h3>
                </div>
            </Block>
            <style jsx>{`
        .photo-block-text{
            max-width: 80%;
            min-height: 80%;   
            width: 80%;
            height: 80%;  
            margin: 0 auto; 
        }
        .photo-block-text h3{
            font-family: 'Kalam';
            font-weight: 100;
            font-size: 1rem;
        }
        @media(min-width: 1025px){
            .photo-block-text h3{
            font-size: 1.3rem;
        } 
        }
        `}</style>
        </>
    )
}

