import { io } from "socket.io-client";
const socket = io("https://13482b8f7081.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
