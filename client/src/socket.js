import { io } from "socket.io-client";
const socket = io("https://2e1910df8b8c.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
