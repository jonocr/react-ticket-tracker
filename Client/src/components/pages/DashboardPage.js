import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../utils/AuthContext";
import TopBar from "../layout/TopBar";
import SideMenu from "../layout/SideMenu";
import { useHistory } from "react-router";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
	getTicketsTotal,
	getOpenCloseTicketsTotal,
} from "../tickets/TicketApi";

const percentage = 66;

const DashboardPage = (props) => {
	const abortController = new AbortController();
	const signal = abortController.signal;
	const [closeCss, setCloseCss] = useState("");
	const [totalTickets, setTotalTickets] = useState();
	const [totalOpenTickets, setTotalOpenTickets] = useState();
	const [totalCloseTickets, setTotalCloseTickets] = useState();
	const history = useHistory();
	const { userData } = useContext(AuthContext);
	const totalTicketProgress = 100;

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	useEffect(() => {
		!userData.token && history.push("/login");

		getTicketsTotal(
			userData.user.email,
			userData.user.department,
			userData.token,
			signal
		)
			.then((data) => {
				setTotalTickets(data);
			})
			.catch((err) =>
				console.log("An error happened when retrieving the tickets total")
			);

		getOpenCloseTicketsTotal(
			userData.user.email,
			userData.user.department,
			true,
			userData.token,
			signal
		)
			.then((data) => setTotalOpenTickets(data))
			.catch((err) =>
				console.log("An error happened when retrieving the open tickets total")
			);

		getOpenCloseTicketsTotal(
			userData.user.email,
			userData.user.department,
			false,
			userData.token,
			signal
		)
			.then((data) => setTotalCloseTickets(data))
			.catch((err) =>
				console.log("An error happened when retrieving the open tickets total")
			);

		return function cleanup() {
			abortController.abort();
		};
		// eslint-disable-next-line
	}, []);

	const openTickets = () => {};

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
									<CircularProgressbar
										value={totalTicketProgress}
										text={totalTickets}
									/>
								</div>
								<div className="text">Total Tickets</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-3">
							<div className="box">
								<div className="open-msg">
									<CircularProgressbar
										value={(100 * totalOpenTickets) / totalTickets}
										text={`${(100 * totalOpenTickets) / totalTickets}%`}
									/>
								</div>
								<div className="text">Open</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-3">
							<div className="box">
								<div className="close-msg">
									<CircularProgressbar
										value={(100 * totalCloseTickets) / totalTickets}
										text={`${(100 * totalCloseTickets) / totalTickets}%`}
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
