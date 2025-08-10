import './App.css'
import io from "socket.io-client"
const socket = io.connect("http://localhost:3001")

function App() {

  const sendMessage = () => {
    socket.emit()
  }

  return (
    <>
      <input placeholder='message'></input>
      <button onClick={sendMessage}>sendMessage</button>
    </>
  )
}

export default App
