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
	getTicketCommentsTotal,
} from "../tickets/TicketApi";

const DashboardPage = (props) => {
	const abortController = new AbortController();
	const signal = abortController.signal;
	const [closeCss, setCloseCss] = useState("");
	const [loading, setLoading] = useState(true);
	const [totalTickets, setTotalTickets] = useState(0);
	const [totalOpenTickets, setTotalOpenTickets] = useState(0);
	const [totalCloseTickets, setTotalCloseTickets] = useState(0);
	const [totalTicketComments, setTotalTicketComments] = useState(0);
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
			.then((data) => {
				setTotalOpenTickets(data);
			})
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
			.then((data) => {
				setTotalCloseTickets(data);
			})
			.catch((err) =>
				console.log("An error happened when retrieving the open tickets total")
			);

		getTicketCommentsTotal(userData.user.email, userData.token, signal)
			.then((data) => {
				setTotalTicketComments(data[0].total);
			})
			.catch((err) =>
				console.log(
					"An error happened when retrieving the tickets comments total"
				)
			);

		return function cleanup() {
			abortController.abort();
		};
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		setLoading(false);
	}, [totalTicketComments]);

	return (
		<div className={closeCss}>
			<SideMenu css={closeCss}></SideMenu>
			<TopBar onClick={clickToggle} css={closeCss}></TopBar>
			<div className="container">
				<div className="dashboard-bar dashboard">Dashboard</div>
				<div className="dashboard-main dashboard">
					{!loading && (
						<div>
							<div className="row">
								<div className="col-12 col-md-6 col-lg-3">
									<div className="box">
										<div>
											<CircularProgressbar
												value={totalTickets < 1 ? "0" : totalTicketProgress}
												text={totalTickets < 1 ? "0" : totalTickets}
											/>
										</div>
										<div className="text">Total Tickets</div>
									</div>
								</div>
								<div className="col-12 col-md-6 col-lg-3">
									<div className="box">
										<div className="open-msg">
											<CircularProgressbar
												value={
													totalOpenTickets > 0
														? (100 * totalOpenTickets) / totalTickets
														: "0"
												}
												text={
													totalOpenTickets > 0
														? `${Number.parseFloat(
																(100 * totalOpenTickets) / totalTickets
														  ).toFixed(0)}%`
														: "0"
												}
											/>
										</div>
										<div className="text">Open</div>
									</div>
								</div>
								<div className="col-12 col-md-6 col-lg-3">
									<div className="box">
										<div className="close-msg">
											<CircularProgressbar
												value={
													totalCloseTickets > 0
														? (100 * totalCloseTickets) / totalTickets
														: "0"
												}
												text={
													totalCloseTickets > 0
														? `${Number.parseFloat(
																(100 * totalCloseTickets) / totalTickets
														  ).toFixed(0)}%`
														: "0"
												}
											/>
										</div>
										<div className="text">Close</div>
									</div>
								</div>
								<div className="ccol-12 col-md-6 col-lg-3">
									<div className="box">
										<div className="comments">
											<CircularProgressbar
												value={
													totalTicketComments > 0 ? totalTicketProgress : "0"
												}
												text={
													totalTicketComments > 0 ? totalTicketComments : "0"
												}
											/>
										</div>
										<div className="text">Total Messages</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>

				<div className="dashboard-main dashboard"></div>
			</div>
		</div>
	);
};

export default DashboardPage;
