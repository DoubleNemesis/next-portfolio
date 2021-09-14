export default function SrollButton(props){

    function handleClick(){
        const destination = document.getElementById(props.destination)
        destination.scrollIntoView({block: "center", inline: "nearest"})
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
        }
        .scroll-btn:hover{
            color: #00acea;
        }
        `}</style>
        </>
    ) 

}