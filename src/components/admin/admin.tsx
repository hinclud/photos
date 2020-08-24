import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function () {
	return (
		<div>
			<Container>
				<Link
					className="btn btn-block btn-outline-primary"
					to="/admin/blog/"
				>
					Blog Posts
				</Link>
				<Link
					className="btn btn-block btn-outline-warning"
					to="/admin/portfolio/add"
				>
					Portfolio
				</Link>
				<Link
					className="btn btn-block btn-outline-secondary"
					to="/admin/user/"
				>
					Manage Users
				</Link>
			</Container>
		</div>
	);
}
