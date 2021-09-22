export default function SrollButton(props){

    function handleClick(){
        const destination = document.getElementById(props.destination)
        destination.scrollIntoView({block: "start", inline: "nearest"})
    }

    return(
        <>
        <button className="scroll-btn" onClick={handleClick}>{props.text}<br/>&darr;</button>
        <style jsx>{`
        .scroll-btn{
            background-color: transparent;
            border: none;
            color: white;
            cursor: pointer;
            margin-top: 6rem;
            font-size: 1rem;
        }
        .scroll-btn:hover{
            color: #00acea;
        }
        `}</style>
        </>
    ) 

}