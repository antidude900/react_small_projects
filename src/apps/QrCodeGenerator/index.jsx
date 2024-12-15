import { useState } from "react";
import "./styles.css"
import QrCode from "react-qr-code"

export default function QrCodeGenerator() {

    const [input,setInput] = useState("")
    const [qrCode,setQrCode] = useState("")

	return <div className="container">
        <h1>QR Code Generator</h1>
        <div>
            <input type="text" placeholder="Enter your value here" onChange={e=>{setInput(e.target.value)}}/>
            <button disabled={input != "" ? false:true} onClick={()=>{setQrCode(input)}}>Submit</button> 
        </div>
        <QrCode value={qrCode} size={400} bgColor="#fff"/>
    </div>;
}
