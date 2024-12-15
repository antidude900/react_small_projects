/* eslint-disable react/prop-types */
import { useState } from "react";

export default function TabComponent({ tabsContent, onChange }) {

    const [currentIndex,setCurrentIndex] = useState(0);

    function handleClick(index){
        setCurrentIndex(index);
        onChange(index);
    }

	return (
	<div className="wrapper">
		<div className="header">
			{tabsContent.map((tabItem,index) => (
				<span onClick={()=>handleClick(index)} key={tabItem.label} className={index == currentIndex ? "active":""}>{tabItem.label}</span>
			))}
			
		</div>

		<div className="content">
            {tabsContent[currentIndex] && tabsContent[currentIndex].content}
        </div>
	</div>
	)
}
