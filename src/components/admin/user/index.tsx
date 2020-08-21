import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IUser } from "../../../interfaces";
import { getUsersList } from "../../../utils/api";
import { Table, TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";

export default function () {
	const [users, setUsers] = React.useState<IUser[]>([]);

	useEffect(() => {
		getUsersList().then((users) => {
			setUsers(users);
		});
	}, []);

	return (
		<div>
			<Container>
				<Table>
					{users.map((value) => {
						return (
							<TableRow>
								<TableCell>{value.username}</TableCell>
								<TableCell>
									<Link
										to={`/admin/user/${value.username}/image`}
									>
										Upload Images
									</Link>
								</TableCell>
							</TableRow>
						);
					})}
				</Table>
			</Container>
		</div>
	);
}
