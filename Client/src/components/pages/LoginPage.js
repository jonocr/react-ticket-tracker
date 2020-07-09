import React, { useState, useContext } from "react";
import AuthContext from "../utils/AuthContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const LoginPage = () => {
	const [user, setUser] = useState({});
	const { setUserData } = useContext(AuthContext);
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
				//*********JUST FOR DEV ENVIROMENT******** */
				// window.localStorage.setItem('token', data.token);
				// window.localStorage.setItem('user', data.user);
				history.push("/dashboard");
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
							Login
						</button>
					</div>
				</form>
				<div className="no-account">
					Don't have account ? <Link to="/new-account">Sign Up Here</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
