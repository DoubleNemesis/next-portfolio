import Image from 'next/image'
import blue from '../public/blue.png'
import green from '../public/green.png'
import orange from '../public/orange.png'
import purple from '../public/purple.png'


export default function ImageBlock(){
return(
    <div>
    <div className="image-block">
<Image src={blue}/>
<Image src={green}/>
<Image src={orange}/>
<Image src={purple}/>
<div>Here</div>
</div>
<style jsx>{`
.image-block{
    display: flex;
    flex-direction: column;
    max-width: 100%;
}
@media(min-width: 700px){
    .image-block{
        flex-direction: row;
        max-width: 100%;
    }
}
`}</style>
</div>
)
}