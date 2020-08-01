import React, { useState } from "react";
import UserClientForm from "../../users/UserClientForm";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { signup } from "../../users/UserApi";

const ALERT_MSG_CREATE_USER_VALIDATION = "Invalid email, username or password.";
const ALERT_MSG_CREATE_USER_CONFIRMATION = "User created.";

const CreateUser = (props) => {
	const history = useHistory();
	const [msgCss, setMsgCss] = useState("close d-none");
	const [alertMsg, setAlertMsg] = useState("");

	const clickCreateHandle = async (userData) => {
		if (
			userData.userName === "" ||
			userData.email === "" ||
			userData.password === ""
		) {
			showMsg(ALERT_MSG_CREATE_USER_VALIDATION, "alert-danger");
			return null;
		}
		signup(userData)
			.then((data) => {
				showMsg(ALERT_MSG_CREATE_USER_CONFIRMATION, "alert-success");
			})
			.catch((err) => console.log(err));
	};

	const showMsg = (msg, style) => {
		setMsgCss(`alert ${style} alert-dismissible fade show`);
		setAlertMsg(msg);
	};

	const hideMsg = () => {
		setMsgCss("close d-none");
	};

	const redirectLogin = () => {
		if (alertMsg === ALERT_MSG_CREATE_USER_CONFIRMATION) {
			history.push("/login");
		}
	};

	return (
		<div>
			<div className="new-user-body">
				<div className="new-user-container">
					<div className={msgCss} role="alert">
						{alertMsg}
						<button type="button" className="close" onClick={redirectLogin}>
							<span onClick={hideMsg}>&times;</span>
						</button>
					</div>
					<div className="container">
						<UserClientForm onClickSave={clickCreateHandle}></UserClientForm>
					</div>
					<div className="no-account">
						Already have an account ? <Link to="/login">Log In Here</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateUser;
