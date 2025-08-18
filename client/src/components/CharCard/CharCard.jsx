import React from "react"

const CharCard = ({charName}) => {
    return(
        <>
            <div className="character-container">
                <h1>{charName}</h1>
            </div>
        </>
    )
}

export default CharCard