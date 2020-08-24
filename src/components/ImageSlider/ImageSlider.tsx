import React, { useEffect } from "react";

interface IImages {
	urls: string[];
	timeout: number;
}

export default function (images: IImages) {
	const [image, setImage] = React.useState<string>(images.urls[0]);
	let currentCount = 0;

	const next = () => {
		currentCount = (currentCount + 1) % images.urls.length;
		setImage(images.urls[currentCount]);
	};

	useEffect(() => {
		setInterval(next, images.timeout * 1000);
	}, []);

	return (
		<div
			className="image-slider"
			style={{ backgroundImage: `url('${image}')` }}
		/>
	);
}
