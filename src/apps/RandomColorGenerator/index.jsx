import { useState } from "react"
import "./styles.css"



export default function RandomColorGenerator(){
    const [mode,setMode] = useState("RGB")
    const [color,setColor] = useState("#ffffff")

    const convertHexToRgb=(hex)=>{

        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        
        return { r, g, b };

    }

    const getRandomHexColor = () => {
        return `#${Math.floor(Math.random() * parseInt("FFFFFF", 16)).toString(16).padStart(6, '0')}`;
    };

    let rgbcolor = convertHexToRgb(color)

    return (
        <div className="wrapper" style={{backgroundColor:color}}>
            <div className="buttons">
                <button onClick={()=>setMode("HEX")}>Create HEX</button>
                <button onClick={()=>setMode("RGB")}>Create RGB</button>
                <button onClick={()=>setColor(getRandomHexColor)}>Create Random </button>
            </div>
            <div className={`text ${color === "#000000" ? "white-text":""}`}>
                
            
            <div className="title" >{mode} Color</div>
            <div className="color">
                {mode === "HEX" ? `#${color}` : `rgb(${rgbcolor.r}, ${rgbcolor.g}, ${rgbcolor.b})`}
            </div>
            </div>
        </div>
    )
}