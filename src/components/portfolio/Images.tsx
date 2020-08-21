import React from "react";
import { render } from "react-dom";
import Gallery from "react-grid-gallery";
import { IPortfolioImage } from "../../interfaces";

interface IProps {
	images: IPortfolioImage[];
}

export default function (props: IProps) {
	return <Gallery enableImageSelection={false} images={props.images} />;
}
