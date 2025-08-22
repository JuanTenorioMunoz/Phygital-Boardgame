import {Html5QrcodeScanner} from "html5-qrcode"
import { useEffect, useState } from "react";
 
const QRScanner = () => {

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
    }

    const error = (err) => {
        console.warn(err)
    }

    scanner.render(success, error);
    }, []);
    
    

    return(
        <>
        { scanResult ? console.log(scanResult) : <div id="reader"></div>}
        </>
    )
}

export default QRScanner