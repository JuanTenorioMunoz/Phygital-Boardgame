const CharCard = ({ charName, onClick, image }) => {
  return (
    <div
      className="character-container relative flex flex-col items-center cursor-pointer p-2"
      onClick={onClick}
    >
      <img
        src={image}
        alt={charName}
        className="w-[100px] h-[140px] object-cover rounded-3xl"
      />
      <h1 className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white drop-shadow-md">
        {charName}
      </h1>
    </div>
  )
}

export default CharCard
