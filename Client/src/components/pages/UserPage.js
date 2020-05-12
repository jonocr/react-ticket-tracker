import React, { useState, useEffect } from "react";
import TopBar from "../layout/TopBar";
import SideMenu from "../layout/SideMenu";
import UserList from "../users/UserList";
import UserForm from "../users/UserForm";

import mockData from "../../data/users.json";
import mockTeam from "../../data/team.json";

const UserPage = (props) => {
	const [closeCss, setCloseCss] = useState("");
	const [allUsers, setAllUsers] = useState([]);
	const [teamUsers, setTeamUsers] = useState([]);
	const [availableUsers, setAvailableUsers] = useState([]);

	useEffect(() => {
		setAllUsers(mockData);
		setTeamUsers(mockTeam);
		setAvailableUsers(filterUsers);
	}, []);

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	const filterUsers = mockData.filter(
		(elem) => !mockTeam.find(({ email }) => elem.email === email)
	);

	const clickSaveHandle = async (e) => {
		e.preventDefault();
		const { userName, email } = e.target.elements;
		console.log("clickSaveHandle: ", userName.value, email.value);

		try {
			// await app
			//   .auth()
			//   .signInWithEmailAndPassword(email.value, password.value);
			// history.push("/home");
		} catch (error) {
			// setOpenError(true);
			// setErrorMsg(error.message);
			return false;
		}
	};

	return (
		<div className={closeCss}>
			<SideMenu css={closeCss}></SideMenu>
			<TopBar onClick={clickToggle} css={closeCss}></TopBar>
			<div className="container">
				<div className="dashboard-bar dashboard">Users</div>
				<div className="dashboard-main dashboard">
					<UserForm onClickSave={clickSaveHandle}></UserForm>

					<div className="row">
						<div className="col-12 col-md-6">
							Team Members
							<UserList data={filterUsers}></UserList>
						</div>
						<div className="col-12 col-md-6">
							All Users
							<UserList data={mockData}></UserList>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserPage;
