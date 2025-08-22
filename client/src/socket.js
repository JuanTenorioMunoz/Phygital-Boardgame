import { io } from "socket.io-client";
const socket = io("https://02fabc51bffd.ngrok-free.app", {
  transports: ['websocket']
});
export default socket;
