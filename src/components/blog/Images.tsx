import React from "react";
import { render } from "react-dom";
import Gallery from "react-grid-gallery";
import { IBlogImage } from "../../interfaces";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface IProps {
	images?: IBlogImage[];
}

export default function (props: IProps) {
	const matches = useMediaQuery("(min-width:700px)");

	if (matches) {
		return (
			<div className="image-gallery">
				<Gallery
					rowHeight={600}
					enableLightbox={true}
					enableImageSelection={false}
					images={props.images}
				/>
			</div>
		);
	}

	return (
		<div className="image-gallery">
			<Gallery
				rowHeight={300}
				enableLightbox={true}
				enableImageSelection={false}
				images={props.images}
			/>
		</div>
	);
}
