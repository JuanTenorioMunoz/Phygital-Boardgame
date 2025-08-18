import { useEffect, useState } from 'react'
import './Lobby.css'
import { useSocket } from '../../SocketProvider'
import { useDispatch, useSelector } from 'react-redux'
import CharCard from '../../components/CharCard/CharCard';
import { updatePlayer } from '../../redux/playerSlice/playerSlice';


function Lobby() {

  const dispatch = useDispatch()

  const socket = useSocket();

  const userList = useSelector((state) => state.users)

  const selectCharacter = (charName) => {
        socket.emit("update_character_status", {charName, status:true})
        dispatch(updatePlayer(charName))
  }

  const user = useSelector((state) => state.player)


  useEffect(() => {

    socket.emit("request_userList")

  }, [socket])

  return (
    <>
        <div>LOBBYY</div>
        
        <div>You are: {user}</div>

      <div className='available-characters'>
        <h1>Available Characters:</h1>
        {userList
          .filter(user => user.status === false) 
          .map((user)=>{
            return(<CharCard charName={user.characterName} onClick={() => selectCharacter(user.characterName)}></CharCard>)
          })}
      </div>

      <div className='available-characters'>
        <h1>Current players:</h1>
        {userList
          .filter(user => user.status === true) 
          .map((user)=>{
            return(<CharCard charName={user.characterName}></CharCard>)
          })}
      </div>
    </>
  )
}

export default Lobby
