import React, { useState, useContext, useEffect } from "react";
// import useHistory from "react-router-dom";
import AuthContext from "../utils/AuthContext";
import { useHistory } from "react-router";

const LoginPage = () => {
	const [user, setUser] = useState({});
	const { userData, setUserData } = useContext(AuthContext);
	let history = useHistory();

	const loginHandle = (e) => {
		e.preventDefault();

		fetch("http://localhost:8000/users/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				setUserData({
					token: data.token,
					user: data.user,
					loading: false,
				});
				history.push("/user");
			})
			.catch((err) => console.log(err));
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
