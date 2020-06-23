import React, { useState } from "react";

const UserClientForm = (props) => {
	const [user, setUser] = useState({
		userName: "",
		email: "",
		password: "",
		department: "Client",
		isManager: false,
		team: [],
		roles: [],
	});
	const hadlerSaveClick = (e) => {
		e.preventDefault();
		props.onClickSave(user);
	};
	return (
		<div>
			<form onSubmit={hadlerSaveClick}>
				<div className="form-group">
					<label htmlFor="subjectInput">User Name:</label>
					<input
						type="text"
						className="form-control"
						id="userName"
						name="userName"
						placeholder="User Name"
						value={user.userName}
						onChange={(e) => setUser({ ...user, userName: e.target.value })}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="emailInput">Email address</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						placeholder="name@example.com"
						onChange={(e) => setUser({ ...user, email: e.target.value })}
						value={user.email}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="passwordInput">Password</label>
					<input
						type="password"
						className="form-control"
						id="password"
						name="password"
						placeholder="Password"
						onChange={(e) => setUser({ ...user, password: e.target.value })}
					/>
				</div>

				<div className="form-group row">
					<button type="submit" className="btn btn-primary">
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default UserClientForm;
