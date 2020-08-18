import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import { Row, Col } from "react-bootstrap";

export default function () {
	return (
		<section>
			<Row>
				<Col xs={12} sm={6}>
					<div className="data">
						<ImageSlider
							urls={[
								"http://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
							]}
							timeout={6}
						/>
					</div>
				</Col>
				<Col xs={12} sm={6}>
					<div className="data">
						<h1> Anand </h1>
					</div>
				</Col>
			</Row>
		</section>
	);
}
