import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSocket } from "./SocketProvider";
import { updatePlayer } from "./redux/playerSlice/playerSlice";

const PersistenceProvider = ({ children }) => {
  const dispatch = useDispatch();
  const socket = useSocket();
  const savedChar = localStorage.getItem("playerChar");

  useEffect(() => {
    if (savedChar) {
      socket.emit("update_character_status", { charName: savedChar, status: true });
      socket.emit("reconnect")
      dispatch(updatePlayer(savedChar));
    }
  }, [savedChar, socket, dispatch]);

  return children;
};

export default PersistenceProvider;