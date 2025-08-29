import { io } from "socket.io-client";
const socket = io("https://92d2912330d4.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
