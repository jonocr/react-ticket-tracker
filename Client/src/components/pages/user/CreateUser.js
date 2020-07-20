import React, { useState } from "react";
import UserClientForm from "../../users/UserClientForm";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const CreateUser = (props) => {
	const history = useHistory();
	const [succesMsgCss, setSuccesMsgCss] = useState("close d-none");
	const clickCreateHandle = async (userData) => {
		fetch(`${process.env.REACT_APP_API_SERVER_URL}/users/signup`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(userData),
		})
			.then((res) => res.json())
			.then((data) => {
				showMsg();
			})
			.catch((err) => console.log(err));
	};

	const showMsg = () => {
		setSuccesMsgCss("alert alert-success alert-dismissible fade show");
	};
	return (
		<div>
			<div className="new-user-body">
				<div className="new-user-container">
					<div className="container">
						<UserClientForm onClickSave={clickCreateHandle}></UserClientForm>
					</div>
					<div className="no-account">
						Already have an account ? <Link to="/login">Log In Here</Link>
					</div>
					<div className={succesMsgCss} role="alert">
						You have <strong>succesfully</strong> registered a new account.
						<button
							type="button"
							className="close"
							data-dismiss="alert"
							aria-label="Close"
							onClick={() => {
								history.push("/login");
							}}
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateUser;
