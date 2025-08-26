import {Html5QrcodeScanner} from "html5-qrcode"
import { useEffect, useState } from "react";
import { useSocket } from "../../SocketProvider";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

 
const QRScanner = () => {

    const user = useSelector((state) => state.player)
    const socket = useSocket();
    const [scanResult, setScanResult] = useState(null)
    const navigate = useNavigate();

    const [territoryId, setTerritoryID] = useState();

    const setTerritoryControl = (territoryId) =>{
        socket.emit("set_territory_control", {user, territoryId})
        console.log("users", users)
    }

    const setDecreeForVoting = (decreeID) =>{
        socket.emit("set_territory_control", {user, decreeID})
        console.log("users", users)
    }


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
        socket.emit("set_territory_control", { user, territoryId: result});
        navigate("/dashboard")
    };

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