import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IUser } from "../../../interfaces";
import { getUsersList, addUserImages } from "../../../utils/api";
import { Table, TableRow } from "material-ui";
import { TableCell } from "@material-ui/core";
import ImageUpload from "../blog/ImageUpload";

interface IProps {
	match?: any;
}

export default function (props: IProps) {
	const username = props.match.params.username;

	const uploadImages = async (data: FormData, onProgress: Function) => {
		await addUserImages(username, data, onProgress);
	};

	return (
		<div>
			<Container>
				<ImageUpload onUpload={uploadImages} />
			</Container>
		</div>
	);
}
