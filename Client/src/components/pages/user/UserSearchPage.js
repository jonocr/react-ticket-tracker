import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import TopBar from "../../layout/TopBar";
import SideMenu from "../../layout/SideMenu";
import UserList from "../../users/UserList";
import AuthContext from "../../utils/AuthContext";

const UserSearchPage = (props) => {
	const { userData } = useContext(AuthContext);
	const [closeCss, setCloseCss] = useState("");
	const [users, setUsers] = useState([]);
	const history = useHistory();

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	const goUserDetail = (user) => {
		history.push(`/user/${user.email}`);
	};

	const loadUsers = () => {
		fetch("http://localhost:8000/users", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${userData.token}`,
				"Content-Type": "application/json",
			},
		})
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
					<UserList data={users} onClick={goUserDetail}></UserList>
				</div>
			</div>
		</div>
	);
};

export default UserSearchPage;
