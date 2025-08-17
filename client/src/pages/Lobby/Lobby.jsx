import { useEffect, useState } from 'react'
import './Lobby.css'
import { useSocket } from '../../socketProvider'
import { useSelector } from 'react-redux'


function Lobby() {

  const socket = useSocket

  const userList = useSelector((state) => state.users)
  const [username, setUsername] = useState("Example text")

  const sendUsername = () => {
    socket.emit("send_username", {username})
  }


  useEffect(() => {

    socket.emit("request_userList")

  }, [socket])

  return (
    <>
        <div>LOBBYY</div>
      <input placeholder='Enter your name' onChange={(e) => setUsername(e.target.value)}></input>
      <button onClick={sendUsername}>Enter</button>
      <div className='usernames'>
        {userList.map((user)=>{
          return(<div>{user.username}</div>)
        })}
      </div>
    </>
  )
}

export default Lobby
