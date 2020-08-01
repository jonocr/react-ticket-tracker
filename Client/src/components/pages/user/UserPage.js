import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import TopBar from "../../layout/TopBar";
import SideMenu from "../../layout/SideMenu";
import UserList from "../../users/UserList";
import UserForm from "../../users/UserForm";
import { useHistory } from "react-router";
import AuthContext from "../../utils/AuthContext";
import {
	findUserByEmail,
	updateUser,
	signup,
	getAllUsers as getUsers,
} from "../../users/UserApi";

const UserPage = (props) => {
	const abortController = new AbortController();
	const signal = abortController.signal;
	const history = useHistory();
	const [closeCss, setCloseCss] = useState("");
	const [user, setUser] = useState({});
	const [allUsers, setAllUsers] = useState([]);
	const [teamUsers, setTeamUsers] = useState([]);
	const [availableUsers, setAvailableUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	// const [openError, setOpenError] = React.useState(false);
	// const [errorMsg, setErrorMsg] = React.useState("");
	const { email } = useParams();
	const { userData } = useContext(AuthContext);

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	const findUser = (email, signal) => {
		findUserByEmail(email, userData.token, signal)
			.then((responseData) => {
				setUser(responseData[0]);
				setTeamUsers(responseData[0].team);
				setLoading(false);
			})
			.catch((err) => {
				console.log("error at fetching: ", err);
			});
	};

	const getAllUsers = async (signal) => {
		getUsers(userData.token, signal)
			.then((responseData) => {
				setAllUsers(responseData);
			})
			.catch((err) => {
				console.log("error at fetching: ", err);
			});
	};

	const clickUpdateHandle = async (userInfo) => {
		const updatedUser = { ...userInfo, team: teamUsers };

		updateUser(updatedUser, userData.token, signal)
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

	const clickCreateHandle = async (userInfo) => {
		const newUser = { ...userInfo, team: teamUsers };

		signup(newUser, signal)
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
		!userData.token && history.push("/login");
		getAllUsers(signal);
		if (email) {
			findUser(email, signal);
		} else {
			setLoading(false);
		}
		return function cleanup() {
			abortController.abort();
		};
		// eslint-disable-next-line
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
								userInfo={user}
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
