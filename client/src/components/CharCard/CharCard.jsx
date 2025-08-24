const CharCard = ({ charName, onClick, image }) => {
  return (
    <div 
      className="character-container flex flex-col items-center cursor-pointer p-2" 
      onClick={onClick}
    >
      <h1 className="text-lg font-bold">{charName}</h1>
      <img 
        src={image} 
        alt={charName} 
        className="w-60 h-60 object-contain rounded-3xl"
      />
    </div>
  )
}

export default CharCard