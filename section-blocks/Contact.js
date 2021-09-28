

export default function Contact(props){
    return(
        <>
 <div className="contact-container">
<h1>Get in touch</h1>
 <div><a href="https://www.twitter.com/tpchant"><i className="fab fa-twitter" aria-label="twitter link"></i></a><span className="label">Follow me on Twitter</span></div>
 <div><a href="https://www.linkedin.com/in/thomaspchant/"><i className="fab fa-linkedin" aria-label="linked in link"></i></a><span className="label">Connect on LinkedIn</span></div>
 <div><a href="https://github.com/DoubleNemesis"><i className="fab fa-github" aria-label="guthub link"></i></a><span className="label">Find me on GitHub</span></div>
 <div><a href="https://www.youtube.com/channel/UCSSNvHoAGsQLLgOaSjPcMIg"><i className="fab fa-youtube" aria-label="youtube link"></i></a><span className="label">Watch my Videos</span></div>
 <div id="hire-scroll-target"><a href={`mailto:thomaspchant@gmail.com`}><i className="fab fa fa-envelope" aria-label="email link"></i></a><span className="label">Email Me</span></div>
</div>
<style jsx>{`
.contact-container{
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem;
    margin: 0 2rem;
}

.fab{
    font-size: 1.4rem;
    width: 2.8rem;
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
    font-size: 1.2rem;
    font-family: 'Open Sans'
}

@media(min-width:700px){
    .contact-container{
    padding: 2rem 2rem;
    max-width: 50%;
    margin: 0 auto;
}
}
@media(min-width:1025px){
    .contact-container{
    padding: 4rem 2rem;
}
    .fab{
    font-size: 2.2rem;
    width: 3rem;
}
    .label{
    font-size: 2rem;
}  
}

`}</style>
</>
    ) 

}