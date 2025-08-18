
const CharCard = ({charName, onClick}) => {
    return(
        <>
            <div className="character-container" onClick={(onClick)}>
                <h1>{charName}</h1>
            </div>
        </>
    )
}

export default CharCard