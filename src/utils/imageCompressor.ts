import Compressor from "compressorjs";

export const getCompressed = async (file: File) => {
	return new Promise<File>((resolve, reject) => {
		const ops: Compressor.Options = {
			quality: 0.1,
			success: (file: File) => {
				resolve(file);
			},
			error: (err) => {
				reject(err.message);
			},
		};
		new Compressor(file, ops);
	});
};
