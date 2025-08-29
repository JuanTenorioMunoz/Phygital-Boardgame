import { io } from "socket.io-client";
const socket = io("https://6ea19d0adbdd.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
