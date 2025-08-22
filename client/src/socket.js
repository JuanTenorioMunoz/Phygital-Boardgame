import { io } from "socket.io-client";
const socket = io("https://dd34c5e21868.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
