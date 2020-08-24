import React from "react";
import { Link } from "react-router-dom";
import { isUser, isAdmin } from "../../utils/api";

export default function () {
	let link = { name: "Login", path: "/login" };

	return (
		<header>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/portfolio">Portfolio</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/blog">Blog</Link>
				</li>
				<li>
					<Link to={`${link.path}`}>{`${link.name}`}</Link>
				</li>
			</ul>
		</header>
	);
}
