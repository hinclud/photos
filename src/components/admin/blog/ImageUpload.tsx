import React from "react";
import ImageUploader from "react-images-upload";
import { addPostImages } from "../../../utils/api";
import { ProgressBar } from "react-bootstrap";
import { getCompressed } from "../../../utils/imageCompressor";

interface IUpload {
	progress: number;
	current: number;
	total: number;
	currentName?: string;
	isUploading?: boolean;
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

	const uploadPhoto = async (image: any) => {
		try {
			let formData = new FormData();
			const compressedImage = await getCompressed(image);
			formData.append("image", compressedImage, compressedImage.name);
			await props.onUpload(formData, function (ev: ProgressEvent) {
				upload.progress = Math.floor((ev.loaded / ev.total) * 100);
				setUpload({
					...upload,
				});
			});
		} catch (e) {
			alert(e);
		}
	};

	const onDrop = async (picture: any[]) => {
		upload.total = picture.length;
		upload.current = 0;

		setUpload({ ...upload });

		for (const value of picture) {
			while (upload.progress != 100 && upload.progress != 0);

			upload.current = upload.current + 1;
			setUpload({ ...upload });

			await uploadPhoto(value);
		}
		picture.length = 0;
	};

	return (
		<div>
			<ImageUploader
				withPreview={true}
				withIcon={true}
				maxFileSize={100000000}
				buttonText="Choose images"
				onChange={onDrop}
				imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
			/>
			<div>
				{upload.progress == 100 ? (
					<h3>
						Uploaded {upload.current} of {upload.total}...
					</h3>
				) : (
					<h3>
						Uploading {upload.current} of {upload.total}...
					</h3>
				)}

				<ProgressBar min={0} max={100} now={upload.progress} />
			</div>
		</div>
	);
}
