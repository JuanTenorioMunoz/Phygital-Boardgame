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
        style={{ width: "100px", height: "140px" }}
        className="max-w-1 max-h-1 object-contain rounded-3xl"
      />
    </div>
  )
}

export default CharCard