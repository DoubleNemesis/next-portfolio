import { useState, useEffect } from "react"
import SocialIcons from '../widgets/SocialIcons'

const burgerIcon = <svg viewBox="0 0 100 80" width="40" height="40" >
    <rect width="100" height="6"></rect>
    <rect y="30" width="100" height="6"></rect>
    <rect y="60" width="100" height="6"></rect>
</svg>

export default function Header({isMobile}) {

    const [isScrolled, setIsScrolled] = useState(false)
    const [logoAnimation, setLogoAnimation] = useState('unset')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [menuAnimation, setMenuAnimation] = useState('unset')
    const [burgerAnimation, setBurgerAnimation] = useState('unset')
    const [headerAnimation, setHeaderAnimation] = useState('unset')

    function getScrollStatus() {
        const amountScrolled = Math.round(window.scrollY)
        if (amountScrolled > 60) {
            setIsScrolled(true)
            setLogoAnimation('logoUp')
        }
        else {
            if (isScrolled) {
                setIsScrolled(false)
                setLogoAnimation('logoDown')
            }
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', getScrollStatus)
        const hiddenMenu = document.getElementById('hidden-menu-list')
        hiddenMenu.addEventListener('click', rotateBurger)
    })

    function rotateBurger(){
        if(isMenuOpen){
            setBurgerAnimation('burgerClose')
            setMenuAnimation('menuOut') 
            setTimeout(()=>{
                setIsMenuOpen(!isMenuOpen)
            },1000) 
        }
        else{
            setBurgerAnimation('burgerOpen') 
            setMenuAnimation('menuIn')  
            setIsMenuOpen(!isMenuOpen)
        }
    }

    return (
        <header>
            <div className="container">
                <div className="container-inner"></div>
                <div className="logo-container">
                    <h1>Thomas<span className="emphatic">P</span>Chant</h1>
                    <h2><span className="emphatic">Web Developer</span></h2>
                </div>
                <div className="header-text-container">
                {!isMobile ? <SocialIcons/> : null}
                    <a href="/#hire-scroll-target">Hire Me</a>
                    <a href="/#portfolio-scroll-target">Portfolio</a>
                    <a href="/vlog">Vlog</a>
                    <a href="/#history-scroll-target">Work History</a>
                    <a href="/#about-scroll-target">About</a>
                    <a href="/#contact-scroll-target">Contact</a>
                    <button className="burger" onClick={rotateBurger}>{burgerIcon}</button>
                </div>

            </div>
            <div className="hidden-menu">
                <div className="hidden-menu-burger-container">
                    <button className="burger" onClick={rotateBurger}>{burgerIcon}</button>
                </div>
                <SocialIcons/>
                <ul id="hidden-menu-list">
                    <li><a href="/#hire-scroll-target">Hire Me</a></li>
                    <li><a href="/#portfolio-scroll-target">Portfolio</a></li>
                    <li><a href="/vlog">Vlog</a></li>
                    <li><a href="/#history-scroll-target">Work History</a></li>
                    <li><a href="/#about-scroll-target">About</a></li>
                    <li><a href="/#contact-scroll-target">Contact</a></li>
                </ul>
            </div>
            <style jsx>{`
.container{
    background-color: transparent;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 6rem;
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    z-index: 1;
    border-bottom: 1px solid #00acea;
}

.container-inner{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${!isScrolled ? 'transparant' : 'midnightblue' } ;
    z-index: -1;
}

.hidden-menu{
        position: fixed;
        top: 0;
        left: 0;
        background-image: linear-gradient(#1F1F42, #034FA6);
        width: 100%;
        height: 100%;
        display: ${isMenuOpen ? 'inline' : 'none'};
        animation: ${menuAnimation} 1s forwards;
        z-index: 2;
        color: white;
        font-family: 'Open Sans';
        padding-left: 3rem;
    }
.hidden-menu ul{
         line-height: 180%;   
    }
.hidden-menu-burger-container{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 6rem;
    width: 100%;
    padding-right: 2rem;
}

.logo-container{
    margin-top: 2rem;
    margin-left: 1em;
    animation: ${logoAnimation} 1s forwards;
    animation-delay: 0s;
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
    justify-content: right;
    margin-right: 2rem;
    font-family: 'Open Sans';
    letter-spacing: 1px;
}


.header-text-container a {
    text-transform: uppercase;
    color: white;
    font-size: clamp(.8rem, -0.875rem + 6.333vw, .8rem);
    display: none;
}

@media(min-width: 1025px){
    .header-text-container{
    gap: 3rem;
    align-items: center;
    margin-right: 2rem;
}
    .header-text-container > a {
    display: inline;
}  

}

.burger{
    border: none;
    background-color: transparent;
    fill: white; 
    animation: ${burgerAnimation} 1s forwards;
    cursor: pointer;
}

.burger:hover,
.burger-open:hover{
    fill: skyblue;
    color: skyblue;
}

`}</style>
        </header>
    )
}