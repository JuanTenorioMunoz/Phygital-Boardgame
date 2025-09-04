import { useSelector } from "react-redux";
import { useSocket } from "../../SocketProvider"
import { useState } from "react";
import './HorizontalCard.css'



const HorizontalCard = ({charName,credits, image, turn, currentTurn}) => {

    const socket = useSocket();
    const user = useSelector((state) => state.player)

    return(
        <>
        <div className={`horizontal-card ${turn === currentTurn ? "active" : ""}`}>
          <img className="character-image" src={image} alt={charName} />
          <div className="turn-container">
        <div className="details">
          <h1 className="character-name">{charName}</h1>
          <h2 className="character-credits">Credits: {credits}</h2>
        </div>
  </div>
  <h1 className="turn">{turn}</h1>
</div>
        </>
    )
}

export default HorizontalCard