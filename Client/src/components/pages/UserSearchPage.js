import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TopBar from "../layout/TopBar";
import SideMenu from "../layout/SideMenu";
import UserList from "../users/UserList";
import mockData from "../../data/users.json";

const UserSearchPage = (props) => {
	const [closeCss, setCloseCss] = useState("");
	const [users, setUsers] = useState([]);
	const [usersMock, setUsersMock] = useState([]);
	const history = useHistory();

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	const addTeamUser = (user) => {
		history.push(`/user/${user.email}`);
	};

	const loadUsers = () => {
		fetch("http://localhost:8000/users")
			.then((response) => {
				console.log("All Users Data: ", response.clone().json());
				return response.json();
			})
			.then((responseData) => {
				setUsers(responseData);
			})
			.catch((err) => {
				console.log("error at fetching: ", err);
			});
	};

	useEffect(() => {
		loadUsers();
	}, []);

	return (
		<div className={closeCss}>
			<SideMenu css={closeCss}></SideMenu>
			<TopBar onClick={clickToggle} css={closeCss}></TopBar>
			<div className="container">
				<div className="dashboard-bar dashboard">User Search</div>

				<div className="dashboard-main dashboard">
					<UserList data={users} onClick={addTeamUser}></UserList>
				</div>
			</div>
		</div>
	);
};

export default UserSearchPage;
