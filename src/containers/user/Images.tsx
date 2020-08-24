import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IUser, IUserImage } from "../../interfaces";
import {
	getUsersList,
	getUserImages,
	updateUserImageSelection,
} from "../../utils/api";
import { Table, TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import Gallery from "react-grid-gallery";

export default function () {
	const [images, setImages] = React.useState<IUserImage[]>([]);

	const onImageSelect = function (value: any) {
		const selected = !images[value].isSelected;
		images[value].isSelected = selected;
		setImages([...images]);

		updateUserImageSelection(images[value]?.id!, {
			isSelected: selected,
		});
	};

	useEffect(() => {
		getUserImages().then((images) => {
			setImages(images);
		});
	}, []);

	return (
		<div>
			{images.length == 0 ? <h1>there are no images</h1> : ""}
			<Gallery
				images={images}
				enableImageSelection={true}
				onSelectImage={onImageSelect}
			/>
		</div>
	);
}
