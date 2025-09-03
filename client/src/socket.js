import { io } from "socket.io-client";
const socket = io("https://7c26925ddda8.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
