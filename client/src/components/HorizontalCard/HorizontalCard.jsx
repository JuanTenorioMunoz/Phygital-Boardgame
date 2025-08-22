import './HorizontalCard.css'

const HorizontalCard = ({charName, onClick, credits, territories}) => {
    return(
        <>
            <div className="horizontal-card" onClick={(onClick)}>
                <img className="character-image"></img>
                <h1 className="character-name">{charName}</h1>
                <h2 className="character-credits">{credits}</h2>
            </div>
        </>
    )
}

export default HorizontalCard