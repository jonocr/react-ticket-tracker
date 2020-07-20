import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../utils/AuthContext";
import { useHistory } from "react-router";
import SideMenu from "../../layout/SideMenu";
import TopBar from "../../layout/TopBar";
import ProfilePicture from "../../../images/generic-profile1.png";
import { findManyUsersByEmail } from "../../users/UserApi";

const UserProfilePage = (props) => {
	const [closeCss, setCloseCss] = useState("");
	const [user, setUser] = useState("");
	const { userData } = useContext(AuthContext);
	const history = useHistory();
	const abortController = new AbortController();
	const signal = abortController.signal;

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	useEffect(() => {
		!userData.token && history.push("/login");
		findManyUsersByEmail(userData.user.email, signal).then((res) => {
			if (res !== undefined) {
				setUser(res[0]);
			}
		});
		return function cleanup() {
			abortController.abort();
		};
		// eslint-disable-next-line
	}, []);
	return (
		<div className="profile-page">
			<div className={closeCss}>
				<SideMenu css={closeCss}></SideMenu>
				<TopBar onClick={clickToggle} css={closeCss}></TopBar>
				<div className="container">
					<div className="dashboard-bar dashboard">My Profile</div>
					<div className="dashboard-main dashboard">
						<div className="card">
							<div className="card-header">
								<div className="profile-picture-card ">
									<img
										src={ProfilePicture}
										className="profile-picture rounded-circle"
										alt="Profile Flag"
									></img>
								</div>
								<div className="profile-name-card">
									<div className="username">{user.userName}</div>
									<div className="role"> {user.department}</div>
								</div>
							</div>
							<div className="card-body">
								<ul>
									<li>
										<h5>2</h5>
										{user.department === "Client" ? "Tickets" : "Cases"}
									</li>
									<li>
										<h5>1</h5>
										Open
									</li>
									<li>
										<h5>1</h5>
										Close
									</li>
								</ul>
							</div>
							<div>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">Username: {user.userName}</li>
									<li className="list-group-item">Role: {user.department}</li>
									<li className="list-group-item">Email: {user.email}</li>
									<li className="list-group-item">
										User since: {(user.createdAt + "").split("T")[0]}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfilePage;
