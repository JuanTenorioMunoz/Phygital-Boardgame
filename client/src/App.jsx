import { useState } from 'react'
import './App.css'
import io from "socket.io-client"
const socket = io.connect("http://localhost:3001")

function App() {

  const [userList, setUserList] = useState(["Pedro", "Alberto"])
  const [username, setUsername] = useState("Example text")

  const sendMessage = () => {
    socket.emit()
  }

  return (
    <>
      <input placeholder='Enter your name'></input>
      <button onClick={sendMessage}>Enter</button>
      <div className='usernames'>
        {userList.map((user)=>{
          <div>{user}</div>
        })}
      </div>
    </>
  )
}

export default App
