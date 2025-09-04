import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import './Territory.css'

const Territory = () => {
  const territories = useSelector((state) => state.gameState.territories || []);
  const player = useSelector((state) => state.player);

  return (
    <div className="territories">
      <Navbar />
      <div className="player-territories">
        <h1>Your territories:</h1>
        {territories
          .filter((territory) =>
            territory.players.includes(player)
          )
          .map((territory) => (
            <Card name={territory.name} credits={territory.players.length ? territory.credits / territory.players.length : 0} />
          ))}
      </div>

      <div className="board-territories">
  <h1>Board territories:</h1>
  {territories.map((territory) => (
    <Card 
      key={territory.id} 
      name={territory.name} 
      credits={territory.credits} 
    />
  ))}
</div>
    </div>
  );
};

export default Territory;
