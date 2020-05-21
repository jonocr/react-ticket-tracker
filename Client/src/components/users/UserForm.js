import React, { useState, useEffect } from "react";

const UserForm = (props) => {
	const [user, setUser] = useState({
		userName: "",
		email: "",
		password: "",
		department: "",
		isManager: false,
		team: [],
		roles: [],
	});

	const hadlerSaveClick = (e) => {
		e.preventDefault();
		props.onClickSave(user);
	};

	useEffect(() => {
		console.log("CONSTRUCTOR USER VALUES: ", user);
		if (
			props.userData &&
			JSON.stringify(props.userData) !== JSON.stringify({})
		) {
			console.log("USER FORM: ", props.userData);
			setUser(props.userData);
		}
	}, []);

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
						onChange={(e) => {
							setUser({ ...user, email: e.target.value });
							console.log("onchange ", user);
						}}
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
						onChange={(e) => setUser({ ...user, password: e.target.value })}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="departmentSelect">Department</label>
					<select
						className="form-control"
						id="departmentSelect"
						onChange={(e) => setUser({ ...user, department: e.target.value })}
					>
						<option>IT</option>
						<option>Billing</option>
						<option>Development</option>
						<option>Sales</option>
						<option>Other</option>
					</select>
				</div>

				<div className="form-group">
					<div className="form-check">
						<input
							type="checkbox"
							className="form-check-input"
							checked={user.isManager}
							onChange={(e) => setUser({ ...user, isManager: !user.isManager })}
							id="managerCheck"
						/>
						<label className="form-check-label" htmlFor="managerCheck">
							Is manager:
						</label>
					</div>
				</div>

				<div className="form-group row">
					<div className="col-sm-10">
						<button type="submit" className="btn btn-primary">
							Save
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default UserForm;
