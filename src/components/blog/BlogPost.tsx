import React, { useState, useEffect } from "react";
import Images from "./Images";
import { getPost, getPostImages } from "../../utils/api";
import { IBlogImage, IBlog } from "../../interfaces";

interface IProps {
	match?: any;
}

export default function (props: IProps) {
	const { id } = props?.match?.params;

	const [blog, setBlog] = useState<IBlog>({});
	const [images, setImages] = useState<IBlogImage[]>([]);

	useEffect(() => {
		getPost(id).then((data) => {
			setBlog(data);
		});
		getPostImages(id).then((data) => {
			setImages(data);
		});
		console.log("a");
	}, []);

	return (
		<div className="blog-post">
			<div className="date">
				<h3> {blog.date?.substr(0, 10)} </h3>{" "}
				<h3 style={{ float: "right" }}> {blog.title} </h3>
			</div>
			<p>{blog.description}</p>
			<Images images={images} />
		</div>
	);
}
