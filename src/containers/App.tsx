import React from "react";
import "../styles/App.sass";
import Home from "../components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Blog from "../components/blog/Blog";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/Portfolio";
import BlogPost from "../components/blog/BlogPost";

function App() {
	return (
		<Router>
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
					<Route path="/blog/entry/:id" component={BlogPost} />
					<Route exact path="/portfolio">
						<Portfolio />
					</Route>
				</Switch>
			</main>
		</Router>
	);
}

export default App;
