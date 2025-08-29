import { io } from "socket.io-client";
const socket = io("https://ef4c551b6015.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
