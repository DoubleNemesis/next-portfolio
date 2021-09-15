export default function Section({ children, ...props }) {
    return (
        <>
        <section>
            {children}
        </section>
                    <style jsx>{`
                    section{
                        background-color: ${props.backgroundColor};
                        min-height: ${props.height || '100vh'};
                        height: ${props.height || '100vh'};
                        width: 100%;
                        color: ${props.color || 'green'};
                    }
                    @media(min-width: 1025px){
                        section{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background-color: ${props.backgroundColor};
                        min-height: ${props.height || '100vh'};
                        height: ${props.height || '100vh'};
                        width: 100%;
                        color: ${props.color || 'green'};
                    }
                    } */
            `}</style>
            </>
    )
}