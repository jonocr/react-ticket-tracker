import React from "react";

const UserList = (props) => {
	const users = props.data;
	const team = props.team;

	console.log("user data: ", users);
	console.log("team data: ", team);

	// const noTeamUsers = users.filter

	// const result = users.filter((user) => {
	// 	const exists = team.includes((member) => {
	// 		member.email == user.email;
	// 	});
	// 	return exists;

	// 	// team.every((member) => {
	// 	// 	member.email === user.email;
	// 	// });
	// });

	const result = users.filter(
		(elem) => !team.find(({ email }) => elem.email === email)
	);

	console.log("results data: ", result);

	return (
		<div>
			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">First</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td colSpan="2">Larry the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default UserList;
