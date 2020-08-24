import React, { useEffect } from "react";
import { Button, Table, Row, Col, Form } from "react-bootstrap";
import { TextField, Grid } from "@material-ui/core";
import { IBlog } from "../../../interfaces";
import {
	updatePost,
	deletePost,
	getPost,
	addPostImages,
} from "../../../utils/api";
import ImageUpload from "./ImageUpload";
import { useHistory } from "react-router";
import { history } from "../../../utils/history";

interface IProps {
	blog?: IBlog;
	match?: any;
}

export default function (props: IProps) {
	const [blogPost, setBlogPost] = React.useState<IBlog>({
		id: props.match?.params?.id,
	});

	const onChange = (changes: IBlog) => {
		setBlogPost({ ...blogPost, ...changes });
	};

	const onUpdate = async () => {
		const post: IBlog = await getPost(blogPost?.id!);
		setBlogPost(post);
	};

	const onSave = async (event: any) => {
		event.preventDefault();
		await updatePost(blogPost?.id!, blogPost);
		onUpdate();
	};

	const onDelete = async () => {
		await deletePost(blogPost?.id);
		history.push("/admin/blog/");
	};

	const uploadImage = async (formData: FormData, onProgress: Function) => {
		await addPostImages(blogPost.id!, formData, onProgress);
	};

	useEffect(() => {
		onUpdate();
	}, []);

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
							fullWidth={true}
							InputLabelProps={{ shrink: true }}
							required
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
							fullWidth={true}
							InputLabelProps={{ shrink: true }}
							required
						/>
					</Col>
					<Col lg={4}>
						<TextField
							label="Date"
							value={blogPost?.date}
							type="date"
							placeholder=""
							onChange={(e) => onChange({ date: e.target.value })}
							fullWidth={true}
							InputLabelProps={{ shrink: true }}
							required
						/>
					</Col>
				</Row>
				<Grid container className="mt-3">
					<Grid>
						<Button
							className="mr-2"
							type="submit"
							variant="primary"
						>
							Save
						</Button>
					</Grid>
					<Grid>
						<Button variant="danger" onClick={onDelete}>
							Delete
						</Button>
					</Grid>
				</Grid>
			</Form>
			<div id="image-upload-section">
				<ImageUpload onUpload={uploadImage} />
			</div>
		</div>
	);
}
