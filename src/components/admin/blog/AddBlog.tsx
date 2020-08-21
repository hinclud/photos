import React, { useEffect } from "react";
import { Button, Table, Row, Col, Form } from "react-bootstrap";
import { TextField, Grid } from "@material-ui/core";
import { IBlog } from "../../../interfaces";
import { updatePost, deletePost, getPost, addPost } from "../../../utils/api";
import ImageUpload from "./ImageUpload";
import { history } from "../../../utils/history";

interface IProps {
	blog?: IBlog;
}

export default function () {
	const [blogPost, setBlogPost] = React.useState<IBlog>({});

	const onChange = (changes: IBlog) => {
		setBlogPost({ ...blogPost, ...changes });
	};

	const onSave = async (event: any) => {
		event.preventDefault();
		await addPost(blogPost);
		history.push("/admin/blog/");
	};

	return (
		<div>
			<Form onSubmit={onSave}>
				<Row>
					<Col lg={4}>
						<TextField
							label="Title"
							value={blogPost?.title}
							onChange={(e) =>
								onChange({ title: e.target.value })
							}
							required
							fullWidth={true}
							InputLabelProps={{ shrink: true }}
						/>
					</Col>
					<Col lg={4}>
						<TextField
							multiline={true}
							label="Description"
							value={blogPost?.description}
							onChange={(e) =>
								onChange({ description: e.target.value })
							}
							required
							fullWidth={true}
							InputLabelProps={{ shrink: true }}
						/>
					</Col>
					<Col lg={4}>
						<TextField
							label="Date"
							value={blogPost?.date}
							type="date"
							placeholder=""
							onChange={(e) => onChange({ date: e.target.value })}
							required
							fullWidth={true}
							InputLabelProps={{ shrink: true }}
						/>
					</Col>
				</Row>
				<Grid container className="mt-3">
					<Button className="mr-2" type="submit" variant="primary">
						Save
					</Button>
				</Grid>
			</Form>
		</div>
	);
}
