import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";

const Territory = () => {
  const territories = useSelector((state) => state.gameState.territories || []);
  const player = useSelector((state) => state.player);

  console.log("TERRET", territories)
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center p-4 gap-4 flex-1">
        {territories
          .filter((territory) =>
            territory.players.includes(player)
          )
          .map((territory) => (
            <Card name={territory.name} credits={territory.players.length ? territory.credits / territory.players.length : 0} />
          ))}
      </div>
    </div>
  );
};

export default Territory;
