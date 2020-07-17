import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../utils/AuthContext";
import { useHistory } from "react-router";
import SideMenu from "../../layout/SideMenu";
import TopBar from "../../layout/TopBar";
import ProfilePicture from "../../../images/generic-profile1.png";

const UserProfilePage = (props) => {
	const [closeCss, setCloseCss] = useState("");
	const { userData } = useContext(AuthContext);
	const history = useHistory();

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	useEffect(() => {
		!userData.token && history.push("/login");
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
									<div className="username">Featured</div>
									<div className="role"> ROLE</div>
								</div>
							</div>
							<div>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">Cras justo odio</li>
									<li className="list-group-item">Dapibus ac facilisis in</li>
									<li className="list-group-item">Vestibulum at eros</li>
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
