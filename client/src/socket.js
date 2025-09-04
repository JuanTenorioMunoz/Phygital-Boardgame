import { io } from "socket.io-client";
const socket = io("https://4c263c8aae81.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
