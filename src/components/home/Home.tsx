import React from "react";
import MainSection from "./MainSection";
import Header from "./../header/Header";
import BlogSection from "./BlogSection";
import AboutSection from "./AboutSection";
import PortfolioSection from "./PortfolioSection";
import AchivementSection from "./AchivementSection";

class Home extends React.Component {
	render() {
		return (
			<section>
				<div>
					<MainSection />
					<PortfolioSection />
					<AboutSection />
					<BlogSection />
				</div>
			</section>
		);
	}
}

export default Home;
