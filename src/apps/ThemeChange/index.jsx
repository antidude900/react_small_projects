import { useState } from "react";
import "./styles.css";


export default function ThemeChange() {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
	);

	const handleThemeChange = (theme) => {
		if (theme === "light") {
			setTheme("dark");
			localStorage.setItem("theme", "dark");
		} else {
			setTheme("light");
			localStorage.setItem("theme", "light");
		}
	};

	return (
		<div className={`container ${theme}`}>
			<h1>Hello World!</h1>
			<button
				onClick={() => {
					handleThemeChange(theme);
				}}
			>
				Change Theme
			</button>
		</div>
	);
}
