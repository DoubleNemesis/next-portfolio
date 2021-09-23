import { useState, useEffect } from 'react'
import Image from 'next/image'
import TextBlock from '../widgets/TextBlock'
import trees from '../public/trees.jpg'
import tom from '../public/tom.png'
import cygnets from '../public/cygnets.jpg'

export default function PhotoBlock(props) {
    const [isPhotoBlockInView, setIsPhotoBlockInView] = useState(false)
    useEffect(() => {
        let target = document.getElementById('blocks')
        let optionstext1 = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        }
        let callback = (entry) => {
            if (entry[0].isIntersecting) {
                setIsPhotoBlockInView(true)
            }
            else {
                setIsPhotoBlockInView(false)
            }
        }
        let observer = new IntersectionObserver(callback, optionstext1)
        observer.observe(target)
    })

    return (<>
        <div className="photo-block-holder" id="blocks">
            <img className="hide-mobile" src="./trees.jpg" />
            <img className="hide-mobile" src="./cygnets.jpg" />
            <img src="./tom.png" />
            <TextBlock bgColor="#00acea" message="This is me trying to smile without looking creepy! When I'm not coding, I love wildlife and nature photography." />
        </div>
        <style jsx>{`
        .photo-block-holder{
            width: 100%;
            display: flex;
            flex-direction: column-reverse;
        }
        .hide-mobile{
            display:none;
        }
        @media(min-width: 700px){
            .photo-block-holder{
            width: 100%;
            display: flex;
            flex-direction: row;
        } 
            .photo-block-holder img{
            width: 25%;
        } 
        .hide-mobile{
            display:inline;
        }
        }

        `}</style>
    </>

    )
}