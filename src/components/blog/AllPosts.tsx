import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BlogPostSection from "./BlogPostSection";
import { getAllPosts } from "../../utils/api";

export default function () {
	const [blogs, setBlogs] = React.useState<any[]>([]);

	useEffect(() => {
		getAllPosts().then((res) => {
			setBlogs(res);
		});
	}, []);

	return (
		<div className="all-posts">
			{blogs.map((value) => {
				return <BlogPostSection blog={value} />;
			})}
		</div>
	);
}
