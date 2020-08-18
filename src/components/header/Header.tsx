import React from "react";
import { Link } from "react-router-dom";

export default function () {
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
			</ul>
		</header>
	);
}
