import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSocket } from '../../SocketProvider'
import HorizontalCard from '../../components/HorizontalCard/HorizontalCard';
import { useNavigate } from 'react-router';
import DecreeCard from '../../components/DecreeCard/DecreeCard';
import { arrayObjectParamValuesFinder } from '../../utils/utils';
import Navbar from '../../components/Navbar/Navbar';

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

  const setTerritoryControl = (territoryId) =>{
    socket.emit("set_territory_control", {user, territoryId})
    console.log(territories)
    console.log("users", users)
  }

  const handleEndTurn = () => {
    socket.emit("finish_turn")
  }

  useEffect(() => {
  }, [])

  return (
    <>
    <div className='options'>
      <Navbar></Navbar>
    </div>
    <h1>Credits: {playerCredits}</h1>
    <div>You are: {user} </div>
    <div>Turn: {turnNumber}</div>
    <div>Cycle: {cycleNumber}</div>
    <input onChange={(e) => setTerritoryID(e.target.value)}></input>
    <button onClick={() => setTerritoryControl(territoryId)}></button>
    <button onClick={handleEndTurn}>End turn</button>


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
          />
        ))}
    </div>
    </>
  )
}

export default Dashboard
