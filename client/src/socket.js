import { io } from "socket.io-client";
const socket = io("https://7c26925ddda8.ngrok-free.awqepp", {
  transports: ['websocket']
});
export default socket;
