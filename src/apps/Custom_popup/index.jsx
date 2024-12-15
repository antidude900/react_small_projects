import "./styles.css"
import Popup_component from "./popup_component";
import { useState } from "react";

export default function Popup() {
    const [showPopUp,setShowPopUp] = useState(false)

    
    function handleClick(){
        setShowPopUp(!showPopUp)
    }

	return (
        <>
		<div className="button-container">
			<button onClick={handleClick} disabled={showPopUp}>Show Popup</button>
            
		</div>
        <div className="content-container">
        {showPopUp && <Popup_component onClose={handleClick}/>}
        </div>
        </>


	);
}
