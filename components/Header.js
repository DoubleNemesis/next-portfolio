import { useState } from "react"

export default function Header() {

    const [isScrolled, setIsScrolled] = useState(false)

    return (
        <header className="container">
            <div className="logo-container">
                <h1>Thomas<span className="emphatic">P</span>Chant</h1>
                <h2><span className="emphatic">Web Developer</span></h2>
            </div>
            <div className="header-text-container">
                <p>Hire Me</p>
                <p>|||</p>
            </div>

            <style jsx>{`

@keyframes logoUp{
    from{
        margin-top: 2rem;
    }
    to{
        margin-top: 1rem;
    }
}
@keyframes logoDown{
    from{
        top: 20%;
    transform: translateY(-20%);
    }
    to{
        top: 50%;
    transform: translateY(-50%);
    }
}
.container{
    background-color: midnightblue;
    width: 100%;
    position: fixed;
    top: 0;
    height: 6rem;
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
}

.logo-container{
    margin-top: 2rem;
    margin-left: 1em;
    animation: logoUp 1s forwards;
    animation-delay: 2s;
}

.logo-container > h1,
.logo-container > h2 {
    padding: 0;
    margin: 0;
    line-height: 90%;
    text-transform: uppercase;
    color: white;
    font-weight: 700;
}

.logo-container > h1 {
    font-size: clamp(.9rem, -0.875rem + 8.333vw, 1.6rem);
}

.logo-container > h2 {
    font-size: clamp(.8rem, -0.875rem + 6.333vw, 1.4rem);
}

.header-text-container{
    display: flex;
    gap: 3rem;
    align-items: center;
    margin-right: 2rem;
}
.header-text-container > p {
    text-transform: uppercase;
    color: white;
    font-size: clamp(.8rem, -0.875rem + 6.333vw, .8rem);
}

`}</style>
        </header>

    )
}