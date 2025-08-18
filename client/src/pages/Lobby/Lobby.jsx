import { useEffect, useState } from 'react'
import './Lobby.css'
import { useSocket } from '../../SocketProvider'
import { useSelector } from 'react-redux'
import CharCard from '../../components/CharCard/CharCard';


function Lobby() {

  const socket = useSocket();

  const userList = useSelector((state) => state.users)
  const [character, setCharacter] = useState()

  const selectCharacter = () => {
    socket.emit("select_character", {character})
  }


  useEffect(() => {

    socket.emit("request_userList")

  }, [socket])

  return (
    <>
        <div>LOBBYY</div>

      <div className='characternames'>
        {userList
          .filter(user => user.status === false) 
          .map((user)=>{
            return(<CharCard charName={user.characterName}></CharCard>)
          })}
      </div>
    </>
  )
}

export default Lobby
