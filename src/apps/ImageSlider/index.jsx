import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

// eslint-disable-next-line react/prop-types
export default function ImageSlider({ url, page = 1, limit = 5 }) {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [images, setImages] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);

	async function getImages(imgUrl) {
		try {
			setLoading(true);

			const response = await fetch(`${imgUrl}?page=${page}&limit=${limit}`);
			const data = await response.json();

			if (data) {
				setImages(data);
				setLoading(false);
			}
		} catch (e) {
			setError(e.message);
			console.log(typeof e.message);
			setLoading(false);
		}
	}

	function handlePrevious() {
		setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
	}
	function handleNext() {
		setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
	}

	useEffect(() => {
		if (url !== "") getImages(url);
		else setError("Empty URL");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url]);

	if (loading) {
		return <div>Wait! Images are loading</div>;
	}
	if (error !== "") {
		return <div>Error Occured:{error}</div>;
	}

	return (
        <div className="body">
           		<div className="container">
			<BsArrowLeftCircleFill
				className="arrow arrow-left"
				onClick={handlePrevious}
			/>
			{images.map((image, index) => (
				<img
					key={image.id}
					src={image.download_url}
					className={currentSlide === index ? "current-image" : "hide-image"}
				/>
			))}
			<BsArrowRightCircleFill
				className="arrow arrow-right"
				onClick={handleNext}
			/>
			<span className="circle-indicators">
				{images.map((_, index) => (
					<button
						key={index}
						className={`indicator ${
							currentSlide !== index ? "inactive-indicator" : ""
						}`}
                        onClick={()=>{setCurrentSlide(index)}}
					></button>
				))}
			</span>
		</div> 
        </div>

	);
}
