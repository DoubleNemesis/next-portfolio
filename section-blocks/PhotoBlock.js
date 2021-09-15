import Image from 'next/image'
import trees from '../public/trees.jpg'
import blue from '../public/blue.png'
import purple from '../public/purple.png'
import green from '../public/green.png'
import tom from '../public/tom.png'

export default function PhotoBlock(){
    return(<>
        <div className="photo-block-holder">
        <Image src={trees}/>
        <Image src={blue}/>
        <Image src={tom}/>
        <Image src={green}/>
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