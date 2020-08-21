import React from "react";
import BlogPost from "./BlogPost";
import { Link } from "react-router-dom";

interface IProps {
	blog?: IBlog;
}

interface IBlog {
	id: string;
	title: string;
	date: string;
	description: string;
}

export default function (props: IProps) {
	return (
		<div className="blog-post-section">
			<div className="date">
				<h3> {props.blog?.date.substr(0, 10)} </h3>{" "}
				<h3 style={{ float: "right" }}> {props.blog?.title} </h3>
			</div>
			<p>{props.blog?.description}</p>
			<div className="img"></div>
			<Link to={`/blog/entry/${props.blog?.id}`}>Read Post</Link>
		</div>
	);
}
