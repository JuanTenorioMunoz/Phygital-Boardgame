import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSocket } from '../../SocketProvider'
import HorizontalCard from '../../components/HorizontalCard/HorizontalCard';
import { useNavigate } from 'react-router';
import DecreeCard from '../../components/DecreeCard/DecreeCard';
import { arrayObjectParamValuesFinder } from '../../utils/utils';
import Navbar from '../../components/Navbar/Navbar';
import './Dashboard.css'

const Dashboard = () => {
  const socket = useSocket();
  const user = useSelector((state) => state.player)
  const territories = useSelector((state) => state.gameState.territories)
  const users = useSelector((state) => state.users)
  const activeUsers = users.filter(user => user.status === true)

  const playerCredits = arrayObjectParamValuesFinder(users, "characterName", user, "credits")

  const navigate = useNavigate();

  const [territoryId, setTerritoryID] = useState();

  const turnNumber = useSelector((state) => state.gameState.turn)
  const cycleNumber = useSelector((state) => state.gameState.cycle)
  

  const handleEndTurn = () => {
    socket.emit("finish_turn")
  }

  const playerTurnOrder = users.find(u => u.characterName === user)?.turnOrder;
  const setTerritoryControl = (territoryId) =>{
    socket.emit("set_territory_control", {user, territoryId})
    console.log(territories)
    console.log("users", users)
  }
  return (
    <>
      <div className='options'>
        <Navbar />
      </div>
    <div className='dashboard-container'>
      <h1>Credits: {playerCredits}</h1>
      <div>You are: {user} </div>
      <div className='turnUndCycle'>
        <div>Turn: {turnNumber}</div>
        <div>Cycle: {cycleNumber}</div>
      </div>
      <input onChange={(e) => setTerritoryID(e.target.value)}></input>
    <button onClick={() => setTerritoryControl(territoryId)}></button>
      {playerTurnOrder === turnNumber && (
        <button 
          onClick={handleEndTurn} 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-2"
        >
          End turn
        </button>
      )}

      <div className='active-users'>
        {activeUsers
          .slice()
          .sort((a, b) => a.turnOrder - b.turnOrder) 
          .map((user) => (
            <HorizontalCard 
              key={user.characterName}
              charName={user.characterName} 
              credits={user.credits}
              turn={user.turnOrder}
              currentTurn={turnNumber}
              image={user.portrait}
            />
          ))}
      </div>
      </div>
    </>
  )
}

export default Dashboard
