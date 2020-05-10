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
		console.log("click!");
	};

	const filterUsers = mockData.filter(
		(elem) => !mockTeam.find(({ email }) => elem.email === email)
	);

	return (
		<div className={closeCss}>
			<SideMenu css={closeCss}></SideMenu>
			<TopBar onClick={clickToggle} css={closeCss}></TopBar>
			<div className="container">
				<div className="dashboard-main dashboard">
					<UserForm></UserForm>
					<UserList data={mockData} team={mockTeam}></UserList>
				</div>
			</div>
		</div>
	);
};

export default UserPage;
