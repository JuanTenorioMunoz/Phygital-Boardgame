import { io } from "socket.io-client";
const socket = io("https://1c8d9e87cb16.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
