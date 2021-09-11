export default function Section({ children, ...props }) {
    return (
        <>
        <section>
            {children}
        </section>
                    <style jsx>{`
                    section{
                        background-color: ${props.backgroundColor};
                        min-height: 100vh;
                        height: ${({height})=>height || '100vh'};
                        width: 100%;
                        color: ${props.color};
                    }
                    @media(min-width: 1025px){
                        section{
                        background-color: ${props.backgroundColor};
                        min-height: 100vh;
                        height: 100vh;
                        width: 100%;
                        color: ${props.color};
                    }
                    }
            `}</style>
            </>
    )
}