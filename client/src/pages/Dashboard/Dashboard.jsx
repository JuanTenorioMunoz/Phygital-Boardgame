import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSocket } from '../../SocketProvider'
import HorizontalCard from '../../components/HorizontalCard/HorizontalCard';
import QRScanner from '../../components/QRScanner/QRScanner';
import { useNavigate } from 'react-router';

const Dashboard = () => {
  const socket = useSocket();
  const user = useSelector((state) => state.player)
  const territories = useSelector((state) => state.gameState.territories)
  const users = useSelector((state) => state.users)
  const activeUsers = users.filter(user => user.status === true)
  const decrees = useSelector((state) => state.gameState.decrees)
  
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

  const goToQR = () => {
    navigate("/QR")
  }

  useEffect(() => {
  }, [])

  return (
    <>
    <button onClick={goToQR}></button>
    <h1>Dashboardcito</h1>
    <div>You are: {user} </div>
    <div>Turn: {turnNumber}</div>
    <div>Cycle: {cycleNumber}</div>
    <input onChange={(e) => setTerritoryID(e.target.value)}></input>
    <button onClick={() => setTerritoryControl(territoryId)}></button>
    <button onClick={handleEndTurn}>End turn</button>
    <div className='active-users'>
      {activeUsers.map((user) => {
        return(<HorizontalCard charName={user.characterName} credits={user.credits}></HorizontalCard>)
      })}
    </div>
    </>
  )
}

export default Dashboard
