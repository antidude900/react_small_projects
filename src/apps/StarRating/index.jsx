import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

// eslint-disable-next-line react/prop-types
export default function StarRating({ noOfStars = 5 }) {
	const [rating, setRating] = useState(-1);
	const [hover, setHover] = useState(-1);

	function handleClick(index) {
		setRating(index);

	}

	function handleMouseEnter(index) {
		setHover(index);

	}

	function handleMouseLeave() {
		setHover(rating);

	}

	return (
		<div className="star-rating">
			{[...Array(noOfStars)].map((_, index) => {

				return (
					<FaStar
						key={index}
						className={index <= hover ? "active" : "inactive"}
						onClick={() => handleClick(index)}
						onMouseMove={() => handleMouseEnter(index)}
						onMouseLeave={() => handleMouseLeave()}
						size={40}
					/>
				);
			})}
		</div>
	);
}
