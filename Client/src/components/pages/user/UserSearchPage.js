import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import TopBar from "../../layout/TopBar";
import SideMenu from "../../layout/SideMenu";
import UserList from "../../users/UserList";
import AuthContext from "../../utils/AuthContext";
import { loadUsers } from "../../users/UserApi";

const UserSearchPage = (props) => {
	const abortController = new AbortController();
	const signal = abortController.signal;
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

	// const loadUsers = () => {
	// 	fetch(`${process.env.REACT_APP_API_SERVER_URL}/users`, {
	// 		signal: signal,
	// 		method: "GET",
	// 		headers: {
	// 			Authorization: `Bearer ${userData.token}`,
	// 			"Content-Type": "application/json",
	// 		},
	// 	})
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((responseData) => {
	// 			setUsers(responseData);
	// 		})
	// 		.catch((err) => {
	// 			console.log("error at fetching: ", err);
	// 		});
	// };

	useEffect(() => {
		loadUsers(userData.token, signal).then((data) => {
			setUsers(data);
		});
		return function cleanup() {
			abortController.abort();
		};
		// eslint-disable-next-line
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
