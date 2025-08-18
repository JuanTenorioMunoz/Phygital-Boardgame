import { io } from "socket.io-client";
const socket = io("https://d89ac50e9ffa.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
