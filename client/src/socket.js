import { io } from "socket.io-client";
const socket = io("https://2b8e2672f80c.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
