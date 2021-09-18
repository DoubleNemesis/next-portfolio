export default function SocialIcons(props) {
    return (
        <>
            <div className="social-icons-container">
                <a href={props.twitter}><i className="fab fa-twitter" aria-label="twitter link"></i></a>
                <a href={props.linkedin}><i className="fab fa-linkedin" aria-label="linked in link"></i></a>
                <a href={props.github}><i className="fab fa-github" aria-label="guthub link"></i></a>
                <a href={props.youtube}><i className="fab fa-youtube" aria-label="youtube link"></i></a>
                <a href={`mailto:${props.email}`}><i className="fab fa fa-envelope" aria-label="email link"></i></a>
            </div>
            <style jsx>{`
        .social-icons-container{
            display: flex;
            gap: 1rem;
        }
        p{
            color: white;
        }
        a{
            cursor: pointer;
        }
        .fab{
            color: white;
            font-size: 1.2rem;
        }
        .fab:hover{
            color: skyblue;
        }
        @media(min-width: 1025px){
            .social-icons-container{
            display: flex;
            flex-direction: row;
            gap: 1rem;
        }
        .fab{
            font-size: 1.7rem;
        }
    }
        `}</style>
        </>
    )
}

