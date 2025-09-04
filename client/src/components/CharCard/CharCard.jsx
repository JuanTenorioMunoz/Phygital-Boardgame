const CharCard = ({ charName, onClick, image }) => {
  return (
    <div
      className="character-container relative flex flex-col items-center cursor-pointer m-4" 
      onClick={onClick}
    >
      <img
        src={image}
        alt={charName}
        className="w-[160px] h-[220px] object-cover rounded-3xl" 
      />
      <h1 className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xl font-extrabold tracking-wider text-white drop-shadow-lg">
        {charName}
      </h1>
    </div>
  )
}

export default CharCard
