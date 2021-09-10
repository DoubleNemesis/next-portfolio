export default function Section({ children, ...props }) {
    return (
        <>
        <section>
            {children}
        </section>
                    <style jsx>{`
                    section{
                        position: sticky;
                        background-color: ${props.backgroundColor};
                        min-height: 100vh;
                        width: 100%;
                        color: ${props.color};
                    }
            `}</style>
            </>
    )
}