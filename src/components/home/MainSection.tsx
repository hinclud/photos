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
								"https://photos.hinclud.com/uploads/1598204365292-371182357blob",
								"https://photos.hinclud.com/uploads/1598204359849-119607539blob",
								"https://photos.hinclud.com/uploads/1598204351986-32983738blob",
							]}
							timeout={4}
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
