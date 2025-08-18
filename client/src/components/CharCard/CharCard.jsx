import React from "react"
import socket from "../../socket"

const CharCard = ({charName}) => {

    const selectCharacter = () => {
        socket.emit("update_character_status", {charName, status:true})
    }

    return(
        <>
            <div className="character-container" onClick={selectCharacter}>
                <h1>{charName}</h1>
            </div>
        </>
    )
}

export default CharCard