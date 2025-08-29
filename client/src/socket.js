import { io } from "socket.io-client";
const socket = io("https://d66219ac6ef4.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
