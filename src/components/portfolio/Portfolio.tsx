import React, { useEffect } from "react";
import Images from "./Images";
import { IPortfolioImage } from "../../interfaces";
import { getPortfolioImages } from "../../utils/api";

export default function () {
	const [images, setImages] = React.useState<IPortfolioImage[]>([]);

	useEffect(() => {
		getPortfolioImages()
			.then((images) => {
				setImages(images);
			})
			.catch((error) => {
				alert(error);
			});
	}, []);

	return (
		<div id="portfolio">
			<h1>THE PORTFOLIO</h1>
			<Images images={images} />
		</div>
	);
}
