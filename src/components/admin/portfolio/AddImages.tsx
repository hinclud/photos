import React from "react";
import ImageUpload from "../blog/ImageUpload";
import { addPorfolioImages } from "../../../utils/api";

export default function () {
	const uploadImages = async (formData: FormData, onProgress: Function) => {
		addPorfolioImages(formData, onProgress);
	};

	return (
		<div>
			<ImageUpload onUpload={uploadImages} />
		</div>
	);
}
