import { useEffect, useState } from 'react'
import './Lobby.css'
import { useSocket } from '../../SocketProvider'
import { useDispatch, useSelector } from 'react-redux'
import CharCard from '../../components/CharCard/CharCard';
import { updatePlayer } from '../../redux/playerSlice/playerSlice';
import { useNavigate } from 'react-router-dom';


const Lobby = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const socket = useSocket();
  
  const [hasSelected, setSelected] = useState(false);
  const userList = useSelector((state) => state.users)
  const user = useSelector((state) => state.player)
  const savedChar = localStorage.getItem("playerChar");

  const selectCharacter = (charName) => {
    socket.emit("update_character_status", { charName, status: true });
    localStorage.setItem("playerChar", charName);
    setSelected(true)
    dispatch(updatePlayer(charName));
  };

  const startGame = () =>{
    socket.emit("client_start_game")
    console.log(gameStatus)
  }

  const gameStatus = useSelector((state) => state.gameState.status)

  useEffect(() => {
    socket.emit("request_userList");

    console.log(gameStatus)

    if (gameStatus) {
      navigate("/dashboard");
    }

  }, [gameStatus, socket])

  return (
    <>
        <button onClick={startGame}>Start Game</button>
        
        <div>You are: {user}</div>

    {hasSelected && (
    <div className='available-characters'>
     <h1>Available Characters:</h1>
      {userList
        .filter(user => user.status === false) 
        .map((user) => (
          <CharCard 
            key={user.characterName} 
            charName={user.characterName} 
            image={user.portrait} 
            onClick={() => selectCharacter(user.characterName)} 
        />
      ))}
    </div>
)}

      <div className='selected-characters'>
        <h1>Current players:</h1>
        {userList
          .filter(user => user.status === true) 
          .map((user)=>{
            return(<CharCard charName={user.characterName} image={user.portrait}></CharCard>)
          })}
      </div>
    </>
  )
}

export default Lobby
