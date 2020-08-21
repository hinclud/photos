import axios, { AxiosResponse } from "axios";
import { IUser } from "../interfaces";
const urlPrefix = "http://localhost:5000";

export const request = async (
	method: "GET" | "PUT" | "POST" | "DELETE",
	url: string,
	data?: any,
	config?: any
): Promise<any> => {
	if (config) {
		return new Promise<any>((resolve, reject) => {
			axios
				.post(urlPrefix + url, data, config)
				.then((res) => {
					resolve(res);
				})
				.catch((err) => reject(err));
		});
	}

	return new Promise<any>((resolve, reject) => {
		axios({
			method,
			url: urlPrefix + url,
			data,
		})
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => reject(err));
	});
};

export const getAllPosts = () => {
	return request("GET", "/api/blog/");
};

export const getPost = (id: string) => {
	return request("GET", `/api/blog/${id}`);
};

export const updatePost = (id: string, data: any) => {
	return request("PUT", `/api/admin/blog/${id}`, data);
};

export const addPost = (data: any) => {
	return request("POST", `/api/admin/blog`, data);
};

export const deletePost = (id?: string) => {
	if (id) {
		return request("DELETE", `/api/admin/blog/${id}`);
	}
};

export const getPostImages = (postId: string) => {
	return request("GET", `/api/blog/${postId}/image`);
};

export const addPostImages = (
	postId: string,
	data: any,
	onUploadProgress: any
) => {
	return request("POST", `/api/admin/blog/${postId}/image`, data, {
		onUploadProgress,
	});
};

export const getUsersList = () => {
	return request("GET", `/api/admin/user`);
};

export const addUserImages = (
	userId: string,
	data: any,
	onUploadProgress: any
) => {
	return request("POST", `/api/admin/user/${userId}/image`, data, {
		onUploadProgress,
	});
};

export const addPorfolioImages = (data: any, onUploadProgress: any) => {
	return request("POST", `/api/admin/portfolio`, data, {
		onUploadProgress,
	});
};

export const login = (data: IUser) => {
	return request("POST", `/api/login`, data);
};

export const checkLogin = () => {
	return request("GET", `/api/login`);
};

export const logout = () => {
	return request("GET", `/api/logout`);
};

export const getPortfolioImages = () => {
	return request("GET", `/api/portfolio`);
};

// USER

export const getUserImages = () => {
	return request("GET", `/api/user/image`);
};
export const updateUserImageSelection = (id: string, data: any) => {
	return request("PUT", `/api/user/image/${id}`, data);
};
