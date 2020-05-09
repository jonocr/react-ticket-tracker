import React, { useState } from "react";
import TopBar from "../layout/TopBar";
import SideMenu from "../layout/SideMenu";
import UserList from "../users/UserList";
import UserForm from "../users/UserForm";

import mockData from "../../data/users.json";
import mockTeam from "../../data/team.json";

const UserPage = (props) => {
	const [closeCss, setCloseCss] = useState("");

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
		console.log("click!");
	};
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
