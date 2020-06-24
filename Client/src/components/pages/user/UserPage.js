import React, { useState, useEffect, useContext } from "react";
import { useParams, Redirect } from "react-router-dom";
import TopBar from "../../layout/TopBar";
import SideMenu from "../../layout/SideMenu";
import UserList from "../../users/UserList";
import UserForm from "../../users/UserForm";
import AuthContext from "../../utils/AuthContext";

// import mockData from "../../data/users.json";
// import mockTeam from "../../data/team.json";

const UserPage = (props) => {
	const [closeCss, setCloseCss] = useState("");
	const [user, setUser] = useState({});
	const [allUsers, setAllUsers] = useState([]);
	const [teamUsers, setTeamUsers] = useState([]);
	const [availableUsers, setAvailableUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [openError, setOpenError] = React.useState(false);
	const [errorMsg, setErrorMsg] = React.useState("");
	const { email } = useParams();
	const { userData } = useContext(AuthContext);

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	const findUserByEmail = (email) => {
		fetch(`http://localhost:8000/users/${email}`)
			.then((response) => {
				return response.json();
			})
			.then((responseData) => {
				setUser(responseData[0]);
				setTeamUsers(responseData[0].team);
				setLoading(false);
			})
			.catch((err) => {
				console.log("error at fetching: ", err);
			});
	};

	const getAllUsers = async () => {
		console.log("FECTH getAllUsers: ", userData.token);
		fetch(`http://localhost:8000/users/`, {
			method: "GET",
			contentType: "application/json",
			headers: {
				Authorization: `Bearer ${userData.token}`,
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((responseData) => {
				console.log("allUsers: ", responseData);
				setAllUsers(responseData);
			})
			.catch((err) => {
				console.log("error at fetching: ", err);
			});
	};

	const clickUpdateHandle = async (userData) => {
		const updatedUser = { ...userData, team: teamUsers };

		fetch("http://localhost:8000/users/update", {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updatedUser),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));

		// setOpenError(true);
		// setErrorMsg(error.message);
		// return false;
	};

	const clickCreateHandle = async (userData) => {
		const newUser = { ...userData, team: teamUsers };

		fetch("http://localhost:8000/users/signup", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newUser),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

	const addUser2Team = (teamMember) => {
		setTeamUsers(teamUsers.concat(teamMember));
	};

	const removeUserFromTeam = (teamMember) => {
		setTeamUsers(filterUsers(teamUsers, [{ email: teamMember.email }]));
	};

	const filterUsers = (fullList, filterList) => {
		return fullList.filter(
			(elem) => !filterList.find(({ email }) => elem.email === email)
		);
	};

	useEffect(() => {
		getAllUsers();
		if (email) {
			findUserByEmail(email);
		} else {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		if (
			(allUsers.length > 0 && JSON.stringify(user) !== JSON.stringify({})) ||
			teamUsers.length > 0
		) {
			let filteredUserList = filterUsers(allUsers, teamUsers);
			filteredUserList = filterUsers(filteredUserList, [{ email: user.email }]);
			setAvailableUsers(filteredUserList);
		} else {
			setAvailableUsers(allUsers);
		}
	}, [allUsers, user, teamUsers]);

	return (
		<div className={closeCss}>
			<SideMenu css={closeCss}></SideMenu>
			<TopBar onClick={clickToggle} css={closeCss}></TopBar>
			<div className="container">
				<div className="dashboard-bar dashboard">Users</div>
				<div className="dashboard-main dashboard">
					{!loading ? (
						<div>
							<UserForm
								onClickSave={email ? clickUpdateHandle : clickCreateHandle}
								userData={user}
							></UserForm>

							<div className="row">
								<div className="col-12 col-md-6">
									Team Members
									<UserList
										data={teamUsers}
										onClick={removeUserFromTeam}
									></UserList>
								</div>
								<div className="col-12 col-md-6">
									All Users
									<UserList
										data={availableUsers ? availableUsers : []}
										onClick={addUser2Team}
									></UserList>
								</div>
							</div>
						</div>
					) : (
						<div>loading...</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default UserPage;
