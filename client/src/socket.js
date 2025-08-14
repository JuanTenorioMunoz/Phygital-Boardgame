import { io } from "socket.io-client";
const socket = io("https://3ad39de74439.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
