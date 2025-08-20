import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSocket } from '../../SocketProvider'

const Dashboard = () => {
  const socket = useSocket();
  const user = useSelector((state) => state.player)
  const territories = useSelector((state) => state.gameState.territories)

  const [territoryId, setTerritoryID] = useState();

  const turnNumber = useSelector((state) => state.gameState.turn)
  const cycleNumber = useSelector((state) => state.gameState.cycle)

  const setTerritoryControl = (territoryId) =>{
    socket.emit("set_territory_control", {user, territoryId})
    console.log(territories)
  }


  const handleEndTurn = () => {
    socket.emit("finish_turn")
  }

  useEffect(() => {
  }, [])

  return (
    <>
    <h1>Dashboardcito</h1>
    <div>Turn: {turnNumber}</div>
    <div>Cycle: {cycleNumber}</div>
    <input onChange={(e) => setTerritoryID(e.target.value)}></input>
    <button onClick={() => setTerritoryControl(territoryId)}></button>
    <button onClick={handleEndTurn}>End turn</button>

    <div className='active-users'></div>
    </>
  )
}

export default Dashboard
