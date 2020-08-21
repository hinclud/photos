import React from "react";
import "../styles/App.sass";
import Home from "../components/home/Home";
import { Router, Switch, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Blog from "../components/blog/Blog";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/Portfolio";
import BlogPost from "../components/blog/BlogPost";
import Admin from "../components/admin";
import BlogForm from "../components/admin/blog/UpdateBlog";
import { history } from "../utils/history";
import UserImages from "./user/Images";
import UserLogin from "./user/Login";

function App() {
	return (
		<Router history={history}>
			<Header />
			<main>
				<Switch>
					<Route exact path="/">
						<Home />;
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/blog">
						<Blog />
					</Route>
					<Route exact path="/user">
						<UserImages />
					</Route>
					<Route exact path="/login">
						<UserLogin />
					</Route>
					<Route path="/blog/entry/:id" component={BlogPost} />
					<Route exact path="/portfolio">
						<Portfolio />
					</Route>
					<Route path="/admin">
						<Admin />
					</Route>
				</Switch>
			</main>
		</Router>
	);
}

export default App;
