import {Html5QrcodeScanner} from "html5-qrcode"
import { useEffect, useState } from "react";
import { useSocket } from "../../SocketProvider";
import { useSelector } from "react-redux";

 
const QRScanner = () => {

    const user = useSelector((state) => state.player)
    const socket = useSocket();
    const [scanResult, setScanResult] = useState(null)

    useEffect(() => {

    const scanner = new Html5QrcodeScanner('reader', {
        qrbox: {
            width: 250,
            height: 250,
        },
        fps: 4 
    })

    const success = (result) => {
        scanner.clear();
        setScanResult(result);
        socket.emit("set_territory_control", {user, scanResult})
    }

    const error = (err) => {
        console.warn(err)
    }

    scanner.render(success, error);
    }, []);
    
    

    return(
        <>
        { scanResult ? <div>{scanResult}</div>: <div id="reader"></div>}
        </>
    )
}

export default QRScanner