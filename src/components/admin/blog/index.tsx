import React, { useEffect } from "react";
import { getAllPosts } from "../../../utils/api";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Table, TableRow, TableCell } from "@material-ui/core";

export default function () {
	const [blogs, setBlogs] = React.useState<any[]>([]);

	useEffect(() => {
		getAllPosts().then((res) => {
			setBlogs(res);
		});
	}, []);

	return (
		<div className="all-posts">
			<Table>
				{blogs.map((value) => {
					return (
						<TableRow>
							<TableCell>{value.title}</TableCell>
							<TableCell>{value.description}</TableCell>
							<TableCell>
								<Link
									to={`/admin/blog/edit/${value.id}`}
									className="btn btn-warning"
								>
									Edit
								</Link>
							</TableCell>
						</TableRow>
					);
				})}
			</Table>
			<div className="mt-3">
				<Link to="/admin/blog/add/" className="btn btn-outline-primary">
					Add New Post
				</Link>
			</div>
		</div>
	);
}
