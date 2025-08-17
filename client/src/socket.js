import { io } from "socket.io-client";
const socket = io("https://d3e4b9a2785d.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
