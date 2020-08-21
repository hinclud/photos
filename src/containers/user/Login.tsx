import React, { useEffect, FormEvent } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { IUser } from "../../interfaces";
import {
	FormGroup,
	FormControl,
	Input,
	TextField,
	Button,
} from "@material-ui/core";
import { login } from "../../utils/api";
import { history } from "../../utils/history";

const colStyle = {
	padding: "1em",
};

export default function () {
	const [user, setUser] = React.useState<IUser>();

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
		login(user!).then((res) => {
			history.push(res.path || "/login");
		});
	};

	const onChange = (changes: IUser) => {
		setUser({ ...user, ...changes });
	};

	return (
		<div className="login">
			<Form onSubmit={onSubmit}>
				<Row>
					<Col xs={12} style={colStyle}>
						<TextField
							fullWidth={true}
							type="text"
							required={true}
							label="Username"
							onChange={(e) =>
								onChange({ username: e.target.value })
							}
						/>
					</Col>
					<Col xs={12} style={colStyle}>
						<TextField
							fullWidth={true}
							type="password"
							required={true}
							label="Password"
							onChange={(e) =>
								onChange({ password: e.target.value })
							}
						/>
					</Col>
					<Col xs={12} style={colStyle}>
						<Button
							variant={"contained"}
							color={"primary"}
							fullWidth={true}
							type="submit"
						>
							Login
						</Button>
					</Col>
				</Row>
			</Form>
		</div>
	);
}
