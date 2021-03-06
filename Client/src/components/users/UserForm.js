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
		if (
			props.userInfo &&
			JSON.stringify(props.userInfo) !== JSON.stringify({})
		) {
			setUser(props.userInfo);
		}
		// eslint-disable-next-line
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
						onChange={(e) => setUser({ ...user, password: e.target.value })}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="departmentSelect">Department</label>
					<select
						className="form-control"
						id="departmentSelect"
						onChange={(e) => setUser({ ...user, department: e.target.value })}
						value={user.department}
					>
						<option value="Client">Client</option>
						<option value="IT">IT</option>
						<option value="Billing">Billing</option>
						<option value="Development">Development</option>
						<option value="Sales">Sales</option>
						<option value="Other">Other</option>
					</select>
				</div>

				<div className="form-group">
					<div className="form-check">
						<input
							type="checkbox"
							className="form-check-input"
							checked={!!user.isManager}
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
