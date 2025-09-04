import { io } from "socket.io-client";
const socket = io("https://773ae1f408f6.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
