import React from "react";
import Blog from "./blog";
import { Switch, Route } from "react-router";
import UpdateBlog from "./blog/UpdateBlog";
import AddBlog from "./blog/AddBlog";
import Admin from "./admin";
import AddImages from "./portfolio/AddImages";
import User from "./user";
import UploadUserImages from "./user/UploadImages";

export default function () {
	return (
		<div>
			<Switch>
				<Route
					exact
					path="/admin/blog/edit/:id"
					component={UpdateBlog}
				></Route>

				<Route exact path="/admin">
					<Admin />
				</Route>

				<Route exact path="/admin/blog/">
					<Blog />
				</Route>
				<Route exact path="/admin/blog/add/">
					<AddBlog />
				</Route>

				<Route exact path="/admin/portfolio/add/">
					<AddImages />
				</Route>

				<Route exact path="/admin/user/">
					<User />
				</Route>

				<Route
					exact
					path="/admin/user/:username/image"
					component={UploadUserImages}
				/>
			</Switch>
		</div>
	);
}
