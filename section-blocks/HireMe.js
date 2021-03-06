export default function HireMe() {
    return (
        <>
            <div className="hire-container">
            <h1>I'm also available for freelance work</h1>
                <p>
                    Whether you need to make some small adjustments to your existing website or want to start from scratch with a whole new web-application, I can help.
                </p>
                <ul>
                    <li>Landing Pages your customers will love</li>
                    <li>Web Applications that do things</li>
                    <li>Databases</li>
                    <li>Search Engine Optimisation</li>
                    <li>Copywriting</li>
                </ul>
                <div id="about-scroll-target"></div>
            </div>

            <style jsx>{`
        .hire-container{
            display: flex;
            flex-direction: column;
            padding: 2rem 2rem;
            margin: 0 auto;
            border: 1px solid #333;
            max-width: 90%;
            margin: 2rem;
            border-radius: 3px;
        }
        @media(min-width:1025px){
            .hire-container{
            display: flex;
            max-width: 50%;
        } 
        }
        ul{
            font-size: 1rem;
            font-family: 'open sans';
        }
          
        `}</style>
        </>
    )

}