import React from "react";
import ImageUploader from "react-images-upload";
import { addPostImages } from "../../../utils/api";
import { ProgressBar } from "react-bootstrap";

interface IUpload {
	progress: number;
	current: number;
	total: number;
	currentName?: string;
}

interface IProps {
	onUpload: Function;
}

export default function (props: IProps) {
	const [upload, setUpload] = React.useState<IUpload>({
		progress: 0,
		current: 0,
		total: 0,
	});

	const onDrop = async (picture: any[]) => {
		setUpload({ ...upload, total: picture.length });
		console.log({ ...upload, total: picture.length });
		for (let index = 0; index < picture.length; index++) {
			let value = picture[index];
			let formData = new FormData();
			formData.append("image", value);
			setUpload({ ...upload, current: index + 1 });
			await props.onUpload(formData, function (ev: ProgressEvent) {
				setUpload({
					...upload,
					progress: Math.round((ev.loaded / ev.total) * 100),
				});
				console.log((ev.loaded / ev.total) * 100);
			});
		}
	};

	return (
		<div>
			<ImageUploader
				withIcon={true}
				buttonText="Choose images"
				onChange={onDrop}
				imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
				maxFileSize={20242880}
			/>
			<div>
				<h3>
					Uploading {upload.current} of {upload.total}...
				</h3>
				<ProgressBar min={0} max={100} now={upload.progress} />
			</div>
		</div>
	);
}
