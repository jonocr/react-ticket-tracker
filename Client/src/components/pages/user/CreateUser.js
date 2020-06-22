import React from "react";
import UserClientForm from "../../users/UserClientForm";

const CreateUser = (props) => {
	const clickCreateHandle = async (userData) => {
		fetch("http://localhost:8000/users/signup", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(userData),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<div className="new-user-body">
				<div className="new-user-container">
					<div className="container">
						<UserClientForm onClickSave={clickCreateHandle}></UserClientForm>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateUser;
