import "./index.css";

import TabComponent from "./component";

// eslint-disable-next-line react-refresh/only-export-components
function RandomComponent() {
	return <h1>I am a random component</h1>;
}

export default function main() {
	const tabs = [
		{
			label: "Tab 1",
			content: <h1>This content from Tab 1</h1>,
		},
		{
			label: "Tab 2",
			content: <h1>This content from Tab 2</h1>,
		},
		{
			label: "Tab 3",
			content: <RandomComponent />,
		},
	];

	function getChange(currentIndex) {
		console.log(`Currently at tab ${currentIndex + 1}`);
	}

	return <TabComponent tabsContent={tabs} onChange={getChange} />;
}
