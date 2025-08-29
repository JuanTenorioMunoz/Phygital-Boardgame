import { useSelector } from "react-redux";
import { useSocket } from "../../SocketProvider"
import { useState } from "react";



const HorizontalCard = ({charName,credits, image, turn, currentTurn}) => {

    const socket = useSocket();
    const user = useSelector((state) => state.player)

    return(
        <>
            <div className="horizontal-card">
                <img className="character-image" src={image}></img>
                <h1 className="turn">{turn}</h1>
                <h1 className="character-name">{charName}</h1>
                <h2 className="character-credits">Credits: {credits}</h2>
            </div>
        </>
    )
}

export default HorizontalCard