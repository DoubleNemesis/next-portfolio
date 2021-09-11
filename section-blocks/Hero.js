export default function Hero() {
    return (
        <>
            <div className="hero-container">
                <h1>Thomas P Chant</h1>
                <h2>Web Debeloper</h2>
                <p>Tech Stack</p>
                <button>View Projects</button>
            </div>
            <style jsx>{`

            .hero-container{
                display: flex;
                flex-direction: column;
                min-height: 100%;
                width: 100%;
                align-items: center;
                justify-content: center;
                color: white;
            }           
            `}</style>
        </>
    )
}