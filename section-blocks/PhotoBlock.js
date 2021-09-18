import { useState, useEffect } from 'react'
import Image from 'next/image'
import AnimatedText from '../widgets/AnimatedText'
import {Block} from '../widgets/AnimatedText'
import trees from '../public/trees.jpg'
import blue from '../public/blue.png'
import purple from '../public/purple.png'
import green from '../public/green.png'
import tom from '../public/tom.png'
import cygnets from '../public/cygnets.jpg'



export default function PhotoBlock() {

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
            <Image src={trees} />
            <Image src={cygnets} />
            <Image src={tom} />
            {isPhotoBlockInView ? <AnimatedText bgColor="skyblue" message="This is me trying to smile without looking creepy! When I'm not coding, I love wildlife and nature photography." /> : <Block bgColor="skyblue"/>}
        </div>
        <style jsx>{`
        .photo-block-holder{
            width: 100%;
            display: flex;
        }
        `}</style>
    </>

    )
}