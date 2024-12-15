import { useEffect, useState } from "react";
import "./styles.css";

export default function ScrollIndicator({ url }) {
	const [data, setData] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [scrollPercent, setScrollPercent] = useState(0);

	async function fetchData(url) {
		try {
			setLoading(true);
			const response = await fetch(url);
			const data = await response.json();

			if (data) {
				setData(data.products);
				setLoading(false);
			}
			console.log(data);
		} catch (e) {
			console.log(e);
			setError(e);
		}
	}

	function handleScrollPercentage() {
		const howMuchScrolled = document.documentElement.scrollTop;

		const scrollHeight =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		setScrollPercent((howMuchScrolled / scrollHeight) * 100);
		console.log(scrollPercent);
	}

	useEffect(() => {
		fetchData(url);
	}, [url]);

	useEffect(() => {
		window.addEventListener("scroll", handleScrollPercentage);

		return () => {
			window.removeEventListener("scroll", () => {});
		};
	});

	return (
		<>
			<div className="top-container">
				<h1 className="title">Custom Scroll Indicator</h1>
				<div className="scroll-progress-container">
					<div
						className="scroll-progress"
						style={{ width: `${scrollPercent}%` }}
					></div>
				</div>
			</div>

			<div className="data-container">
				{data ? data.map((item) => <p key={item.id}>{item.title}</p>) : null}
			</div>
		</>
	);
}
