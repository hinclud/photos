import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function () {
	return (
		<section>
			<Row id="about-section">
				<Col xs={12} sm={6}>
					<img
						style={{ maxWidth: "100%", maxHeight: "500px" }}
						src="http://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
					/>
				</Col>
				<Col xs={12} sm={6}>
					<h2>ABOUT THE ARTIST</h2>
					<Link to="/about">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Aliquam eu dictum urna, ut tincidunt ipsum.
							Nullam et lorem euismod, fringilla turpis at,
							posuere magna. Donec ut mauris quam. Cras efficitur
							hendrerit efficitur. Maecenas a justo consequat,
							venenatis magna a, maximus magna. Aliquam non
							imperdiet tortor. Quisque rutrum vestibulum erat
							quis condimentum. Class aptent taciti sociosqu ad
							litora torquent per conubia nostra, per inceptos
							himenaeos. Nam posuere viverra wturpis nec
							tincidunt.
						</p>
						<h3>Load More</h3>
					</Link>
				</Col>
			</Row>
		</section>
	);
}
