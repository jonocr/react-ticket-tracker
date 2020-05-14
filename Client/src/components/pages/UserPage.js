import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TopBar from "../layout/TopBar";
import SideMenu from "../layout/SideMenu";
import UserList from "../users/UserList";
import UserForm from "../users/UserForm";

import mockData from "../../data/users.json";
import mockTeam from "../../data/team.json";

const UserPage = (props) => {
	const [closeCss, setCloseCss] = useState("");
	const [user, setUser] = useState({});
	const [allUsers, setAllUsers] = useState([]);
	const [teamUsers, setTeamUsers] = useState([]);
	const [availableUsers, setAvailableUsers] = useState([]);
	const [openError, setOpenError] = React.useState(false);
	const [errorMsg, setErrorMsg] = React.useState("");
	const { email } = useParams();

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	const findUserByEmail = (email) => {
		fetch(`http://localhost:8000/users/${email}`)
			.then((response) => {
				return response.json();
			})
			.then((responseData) => {
				setUser(responseData);
			})
			.catch((err) => {
				console.log("error at fetching: ", err);
			});
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
			setOpenError(true);
			setErrorMsg(error.message);
			return false;
		}
	};

	useEffect(() => {
		setAllUsers(mockData);
		setTeamUsers(mockTeam);
		setAvailableUsers(filterUsers);
		console.log("param user email: ", email);
		if (email) {
			findUserByEmail(email);
		}
	}, []);

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
