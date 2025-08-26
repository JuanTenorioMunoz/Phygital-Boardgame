import { useSelector } from "react-redux";
import { useSocket } from "../../SocketProvider"
import { useState } from "react";



const HorizontalCard = ({charName, onClick, credits, image}) => {

    const socket = useSocket();
    const user = useSelector((state) => state.player)

    const [creditsToTransfer, setCreditsToTransfer] = useState(0);

    const transferCredits = () => {
        socket.emit("transfer_credits", {user, charName, creditsToTransfer} )
    }

    return(
        <>
            <div className="horizontal-card" onClick={(onClick)}>
                <img className="character-image" src={image}></img>
                <h1 className="character-name">{charName}</h1>
                <h2 className="character-credits">{credits}</h2>
                <input className="credits-to-transfer" placeholder="transfer" onChange={(e)=>setCreditsToTransfer(e.target.value)}></input>
                <button className="button-transfer" onClick={()=> transferCredits()}>Transfer</button>
            </div>
        </>
    )
}

export default HorizontalCard