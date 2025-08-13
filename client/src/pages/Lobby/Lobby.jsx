import { useEffect, useState } from 'react'
import './Lobby.css'
import io from "socket.io-client"
import socket from '../../socket'

function Lobby() {

  const [userList, setUserList] = useState([])
  const [username, setUsername] = useState("Example text")

  const sendUsername = () => {
    socket.emit("send_username", {username})
  }


  useEffect(() => {

    socket.emit("request_userList")

    socket.on("receive_userList", (data) => {
        setUserList(data);
    })
  }, [socket])

  console.log(userList)

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
