import React, { useState } from "react";

const LoginPage = () => {
	const [user, setUser] = useState({});

	const loginHandle = (e) => {
		e.preventDefault();
		console.log("Login action", user);
	};
	return (
		<div className="login-body">
			<div className="login-container">
				<form onSubmit={loginHandle}>
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
						<div className="col-sm-12">
							<button type="submit" className="btn btn-primary">
								Login
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
