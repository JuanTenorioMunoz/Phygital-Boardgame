import { io } from "socket.io-client";
const socket = io("https://37024c986b52.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
