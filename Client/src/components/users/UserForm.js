import React from "react";

const UserForm = (props) => {
	return (
		<div>
			<form onSubmit={props.onClickSave}>
				<div className="form-group">
					<label htmlFor="subjectInput">User Name:</label>
					<input
						type="text"
						className="form-control"
						id="userName"
						name="userName"
						placeholder="User Name"
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
					/>
				</div>

				<div className="form-group">
					<label htmlFor="departmentSelect">Department</label>
					<select className="form-control" id="departmentSelect">
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
