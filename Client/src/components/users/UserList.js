import React, { useState, useEffect } from "react";

const UserList = (props) => {
	return (
		<div>
			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">User Name</th>
						<th scope="col">Email</th>
						<th scope="col">Created</th>
					</tr>
				</thead>
				<tbody>
					{props.data.map((user, index) => (
						<tr key={index}>
							<th scope="row">{index}</th>
							<td>{user.userName}</td>
							<td>{user.email}</td>
							<td>{user.createdAt}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default UserList;
