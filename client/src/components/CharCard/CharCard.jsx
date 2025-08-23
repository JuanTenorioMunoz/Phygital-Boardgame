
const CharCard = ({charName, onClick, image}) => {
    return(
        <>
            <div className="character-container" onClick={(onClick)}>
                <h1>{charName}</h1>
                <img src={image}></img>
            </div>
        </>
    )
}

export default CharCard