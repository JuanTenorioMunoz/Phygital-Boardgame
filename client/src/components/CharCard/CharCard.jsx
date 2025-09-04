import './CharCard.css'

const CharCard = ({ charName, onClick, image }) => {
  return (
    <div className="character-container" onClick={onClick}>
      <img src={image} alt={charName} className="character-image" />
      <div className="character-name">
        <h1>{charName}</h1>
      </div>
    </div>
  )
}

export default CharCard
