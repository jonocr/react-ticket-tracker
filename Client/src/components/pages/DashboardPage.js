import React, { useState } from "react";
import TopBar from "../layout/TopBar";
import SideMenu from "../layout/SideMenu";
import NewTicket from "../others/NewTicket";

const DashboardPage = (props) => {
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
				<div className="dashboard-bar dashboard">Dashboar Title</div>
				<div className="dashboard-main dashboard">
					<div className="row">
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
					</div>
					<div className="row">
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
					</div>
				</div>

				<div className="dashboard-main dashboard">
					<NewTicket></NewTicket>
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
