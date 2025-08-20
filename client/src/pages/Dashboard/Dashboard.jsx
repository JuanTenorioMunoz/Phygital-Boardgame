import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {

  const turnNumber = useSelector((state) => state.gameState.turn)
  const cycleNumber = useSelector((state) => state.gameState.cycle)

  const handleEndTurn = () => {

  }

  useEffect(() => {
  }, [])

  return (
    <>
    <h1>Dashboardcito</h1>
    <div>Turn: {turnNumber}</div>
    <div>Cycle: {cycleNumber}</div>
    <button onClick={handleEndTurn}>End turn</button>

    <div className='active-users'></div>
    </>
  )
}

export default Dashboard
