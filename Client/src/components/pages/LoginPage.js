import React, { useState, useContext } from "react";
import AuthContext from "../utils/AuthContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { getMessagesTotal } from "../tickets/TicketApi";
import { login } from "../users/UserApi";

const LoginPage = () => {
	const [user, setUser] = useState({ email: "", password: "" });
	const { setUserData } = useContext(AuthContext);
	const [msgCss, setMsgCss] = useState("close d-none");
	let history = useHistory();

	const loginHandle = (e) => {
		e.preventDefault();

		if (user.email === "" || user.password === "") {
			showMsg();
			return null;
		}

		login(user)
			.then((data) => {
				getMessagesTotal(data.user.email, data.user.department, data.token)
					.then((res) => {
						const msgTotal = res.length > 0 ? res[0].total : 0;
						setUserData({
							token: data.token,
							user: { ...data.user, msg: msgTotal },
							loading: false,
						});
					})
					.then(() => history.push("/dashboard"));
				//*********JUST FOR DEV ENVIROMENT******** */
				// window.localStorage.setItem('token', data.token);
				// window.localStorage.setItem('user', data.user);
			})
			.catch((err) => console.log(err));
	};

	const showMsg = () => {
		setMsgCss("alert alert-danger alert-dismissible fade show");
	};

	const hideMsg = () => {
		setMsgCss("close d-none");
	};

	return (
		<div className="login-body">
			<div className="login-container">
				<div className={msgCss} role="alert">
					Incorrect email or password.
					<button type="button" className="close">
						<span onClick={hideMsg}>&times;</span>
					</button>
				</div>
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
