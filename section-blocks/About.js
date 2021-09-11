export default function About() {
    return (
        <>
            <div className="about-container">
                <p>I’m a front-end developer based in Devon in the Southwest of the UK and a graduate of the Scrimba Frontend Career Path.</p>
                <p>Here's a picture of me trying to smile without looking creepy.</p>
                <p>Back in the early days, I built sites in flat HTML and basic CSS. As time went on, I learnt some PHP, and eventually JavaScript. For a time I ran a successful and profitable health blog based on Wordpress. Whilst working as an English teacher I built several apps to help my colleagues and students including a full-stack version of the game Jeopardy with a language-teaching twist.</p>
                <p>As well as being a qualified English teacher, I have a Masters’ degree in Creative Writing and have spent many happy hours creating teaching resources and writing exams, as well as other written-word projects both on and offline. As a colleague, I’m known as a peace-maker and negotiator. Work-place happiness is extremely important to me and the well-being of my colleagues is paramount as we take on the pressures of work together.</p>
                <p>I’m always learning. With JavaScript and React, there will always be something new in the pipeline and new coding patterns. I’m also working with NextJS and expanding my back-end knowledge with NodeJS. For styling, I’ve stuck to vanilla CSS. Frameworks come and go and I believe it’s best to know what’s going on under the hood. That said, I will probably add a CSS framework to my skillset in the near future...</p>
            </div>
            <style jsx>{`

            .about-container{
                display: flex;
                flex-direction: column;
                min-height: 100%;
                width: 100%;
                align-items: center;
                justify-content: center;
                color: white;
            }
            
            p{
                color: #333;
            }
            `}</style>
        </>
    )
}