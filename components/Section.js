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
                        width: 100%;
                        border: 1px solid limegreen;
                    }
            `}</style>
            </>
    )
}