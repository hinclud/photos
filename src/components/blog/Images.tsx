import React from "react";
import { render } from "react-dom";
import Gallery from "react-grid-gallery";
import { IBlogImage } from "../../interfaces";

interface IProps {
	images?: IBlogImage[];
}

export default function (props: IProps) {
	return (
		<Gallery
			rowHeight={600}
			enableLightbox={true}
			enableImageSelection={false}
			images={props.images}
		/>
	);
}
