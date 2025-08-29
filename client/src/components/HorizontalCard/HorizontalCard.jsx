import { useSelector } from "react-redux";
import { useSocket } from "../../SocketProvider"

const HorizontalCard = ({ charName, credits, image, turn, currentTurn }) => {
 


  const isActiveTurn = turn === currentTurn;

  return (
    <div
      className={`p-4 rounded-2xl shadow-md flex items-center gap-4 transition-all duration-300 
        ${isActiveTurn ? "bg-yellow-200 border-4 border-yellow-500 scale-105" : "bg-white border border-gray-300"}
      `}
    >
      {image && <img className="character-image w-16 h-16 rounded-full" src={image} alt={charName} />}
      <div>
        <h1 className="flex flex-row items-center gap-x-2">{turn}</h1>
        <div>
            <h1 className="character-name text-lg font-bold">{charName}</h1>
            <h2 className="character-credits text-sm">Credits: {credits}</h2>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
