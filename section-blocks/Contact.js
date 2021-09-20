export default function Contact(props){
    return(
        <>
<h1>Contact</h1>
 <div className="contact-container">
 <div><a href={props.twitter}><i className="fab fa-twitter" aria-label="twitter link"></i></a><span className="label">Follow me on Twitter</span></div>
 <div><a href={props.linkedin}><i className="fab fa-linkedin" aria-label="linked in link"></i></a><span className="label">Connect on LinkedIn</span></div>
 <div><a href={props.github}><i className="fab fa-github" aria-label="guthub link"></i></a><span className="label">Find me on GitHub</span></div>
 <div><a href={props.youtube}><i className="fab fa-youtube" aria-label="youtube link"></i></a><span className="label">Watch my Videos</span></div>
 <div><a href={`mailto:${props.email}`}><i className="fab fa fa-envelope" aria-label="email link"></i></a><span className="label">Email Me</span></div>
</div>
<style jsx>{`
.contact-container{
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 2rem 2rem;
}

.fab{
    font-size: 2.2rem;
    /* border: 1px solid red; */
    width: 3rem;
}
.fa-twitter{
    color: #55acee;
}
.fa-linkedin{
    color: #0072b1;
}
.fa-youtube{
    color: #FF0000;
}
.fa-envelope{
    color: #666;
}

.label{
    margin-left: 2rem;
    /* border: 1px solid blue; */
    font-size: 2rem;
    font-family: 'Open Sans'
}
`}</style>
</>
    ) 

}