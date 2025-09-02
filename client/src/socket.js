import { io } from "socket.io-client";
const socket = io("https://148e8b570cd7.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
