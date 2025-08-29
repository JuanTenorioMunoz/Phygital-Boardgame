import { io } from "socket.io-client";
const socket = io("https://c38e2c7f9705.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
