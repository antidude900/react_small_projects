import { useEffect, useState } from "react";
import "./styles.css"

export default function LoadMore() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [count, setCount] = useState(0);
	const [disableButton, setDisableButton] = useState(false);

	async function fetchData() {
		try {
			setLoading(true);
			const response = await fetch(
				`https://dummyjson.com/products?limit=20&skip=${
					count === 0 ? 0 : count * 20
				}`
			);
			const data = await response.json();

			if (data) {
				setProducts((prevProducts) => [...prevProducts, ...data.products]);
				setLoading(false);
			}
		} catch (e) {
			setError(true);
			console.log(e);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [count]);

	useEffect(() => {
		if (products.length === 100) setDisableButton(true);
	}, [products]);

	if (loading) {
		return <div>Loading!Please wait...</div>;
	}

	if (error) {
		return <div>Error Occured!Please check the console.</div>;
	}

	return (
		<div className="container">
			<div className="products">
				{products.map((product) => (
					<div className="product" key={product.id}>
						<img
							alt={product.title}
							src={product.thumbnail}
							width="200px"
							height="200px"
						/>
						<p>{product.title}</p>
					</div>
				))}
			</div>

			<button
				onClick={() => {
					setCount(count + 1);
				}}
				disabled={disableButton}

			>
				Load More
			</button>
			{disableButton ? <p>You have reached 100 products</p> : null}
		</div>
	);
}
