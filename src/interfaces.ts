export interface IBlog {
	id?: string;
	title?: string;
	date?: string;
	description?: string;
}

export interface IBlogImage {
	src?: string;
	thumbnailWidth?: number;
	thumbnailHeight?: number;
	thumbnail?: string;
}

export interface IPortfolioImage {
	src?: string;
	thumbnailWidth?: number;
	thumbnailHeight?: number;
	thumbnail?: string;
}

export interface IUserImage {
	id?: string;
	src?: string;
	thumbnailWidth?: number;
	thumbnailHeight?: number;
	thumbnail?: string;
	isSelected?: boolean;
}

export interface IUser {
	username?: string;
	password?: string;
}
