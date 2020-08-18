import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function () {
	const images = [
		"http://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
		"http://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
		"http://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
		"http://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
	];
	return (
		<section>
			<div className="data">
				<h2>Wedding Photographer of the year</h2>
				<p>
					Lorem ips dolor sit amet, consectetur adipiscing elit.
					Aliquam eu dictumut tincidunt ipsum. Nullam et lorem
					euismod, f ringillaturpis at, posuere magna. Donec ut mauris
					quam.
				</p>
			</div>
			<div id="portfolio-section">
				<Row className="images">
					{images.map((e) => {
						return (
							<Col sm={3} xs={6}>
								<img src={e} style={{ width: "100%" }} />
							</Col>
						);
					})}
				</Row>
				<div id="portfolio-details">
						<h2>THE PORTFOLIO</h2>
						<Link to="/portfolio">Browse Our Work</Link>
				</div>
			</div>
		</section>
	);
}
