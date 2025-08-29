import { useSelector } from "react-redux";
import { useSocket } from "../../SocketProvider"

const HorizontalCard = ({ charName, credits, image, turn, currentTurn }) => {
 


  const isActiveTurn = turn === currentTurn;

  return (
    <div
  className={`p-3 rounded-xl shadow-md flex items-center gap-3 transition-all duration-300 
    ${isActiveTurn 
      ? "bg-yellow-200 border-2 border-yellow-500 scale-105" 
      : "bg-white border border-gray-300"}
  `}
>
  {image && (
    <img
      className="w-12 h-12 rounded-full object-cover"
      src={image}
      alt={charName}
    />
  )}
  <div className="flex flex-col">
    <span className="text-xs text-gray-500">Turn {turn}</span>
    <span className="text-base font-semibold">{charName}</span>
    <span className="text-sm text-gray-600">Credits: {credits}</span>
  </div>
</div>

  );
};

export default HorizontalCard;
