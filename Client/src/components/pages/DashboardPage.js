import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../utils/AuthContext";
import TopBar from "../layout/TopBar";
import SideMenu from "../layout/SideMenu";
import { useHistory } from "react-router";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const totalMessages = 100;
const percentage = 66;
const percentageOpen = 60;
const percentageClose = 40;
const DashboardPage = (props) => {
	const [closeCss, setCloseCss] = useState("");
	const history = useHistory();
	const { userData } = useContext(AuthContext);

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	useEffect(() => {
		!userData.token && history.push("/login");
		// eslint-disable-next-line
	}, []);

	return (
		<div className={closeCss}>
			<SideMenu css={closeCss}></SideMenu>
			<TopBar onClick={clickToggle} css={closeCss}></TopBar>
			<div className="container">
				<div className="dashboard-bar dashboard">Dashboard</div>
				<div className="dashboard-main dashboard">
					<div className="row">
						<div className="col-12 col-md-6 col-lg-3">
							<div className="box">
								<div>
									<CircularProgressbar value={totalMessages} text="5" />
								</div>
								<div className="text">Total Tickets</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-3">
							<div className="box">
								<div className="open-msg">
									<CircularProgressbar
										value={percentageOpen}
										text={`${percentageOpen}%`}
									/>
								</div>
								<div className="text">Open</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-3">
							<div className="box">
								<div className="close-msg">
									<CircularProgressbar
										value={percentageClose}
										text={`${percentageClose}%`}
									/>
								</div>
								<div className="text">Close</div>
							</div>
						</div>
						<div className="ccol-12 col-md-6 col-lg-3">
							<div className="box">
								<div className="comments">
									<CircularProgressbar
										value={percentage}
										text={`${percentage}%`}
									/>
								</div>
								<div className="text">Total Messages</div>
							</div>
						</div>
					</div>
					{/* <div className="row">
						<div className="col-12 col-md-6 col-lg-3">
							<div className="box">1 of 4</div>
						</div>
						<div className="col-12 col-md-6 col-lg-3">
							<div className="box">2 of 4</div>
						</div>
						<div className="col-12 col-md-6 col-lg-3">
							<div className="box">3 of 4</div>
						</div>
						<div className="ccol-12 col-md-6 col-lg-3">
							<div className="box">4 of 4</div>
						</div>
					</div> */}
				</div>

				<div className="dashboard-main dashboard"></div>
			</div>
		</div>
	);
};

export default DashboardPage;
