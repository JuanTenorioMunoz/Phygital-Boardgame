import { useEffect, useState } from 'react'
import './App.css'
import io from "socket.io-client"
const socket = io.connect("http://localhost:3001")

function App() {

  const [userList, setUserList] = useState([{username: "Pedro"}, {username: "Alberto"}])
  const [username, setUsername] = useState("Example text")

  const sendMessage = () => {
    socket.emit(username)
  }

  useEffect(() => {

  }, [socket])

  console.log(userList)

  return (
    <>
      <input placeholder='Enter your name' onChange={(e) => setUsername(e.target.value)}></input>
      <button onClick={sendMessage}>Enter</button>
      <div className='usernames'>
        {userList.map((user)=>{
          return(<div>{user.username}</div>)
        })}
      </div>
    </>
  )
}

export default App
