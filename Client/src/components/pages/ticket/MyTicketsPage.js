import React, { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import TicketList from "../../tickets/TicketList";
import TopBar from "../../layout/TopBar";
import SideMenu from "../../layout/SideMenu";
import AuthContext from "../../utils/AuthContext";
import { findTicketsbyEmail } from "../../tickets/TicketApi";

const MyTicketsPage = (props) => {
	const abortController = new AbortController();
	const signal = abortController.signal;
	const [closeCss, setCloseCss] = useState("");
	const [ticketList, setTicketList] = useState([]);
	const [ticket, setTicket] = useState();
	const { userData } = useContext(AuthContext);

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	useEffect(() => {
		findTicketsbyEmail(userData.user.email, userData.token, signal).then(
			(response) => {
				console.log("findTicketsbyEmail: ", response);
				setTicketList(response);
			}
		);
		return function cleanup() {
			abortController.abort();
		};
		// eslint-disable-next-line
	}, []);

	const goTicketDetail = (ticket) => {
		setTicket(ticket);
	};

	const redirectDetail = () => {
		return (
			<Redirect
				to={{
					pathname: "/ticket",
					state: { ticket: ticket },
				}}
			/>
		);
	};

	return (
		<div className={closeCss}>
			{ticket && redirectDetail()}
			<SideMenu css={closeCss}></SideMenu>
			<TopBar onClick={clickToggle} css={closeCss}></TopBar>
			<div className="container">
				<div className="dashboard-bar dashboard">My Tickets</div>
				<div className="dashboard-main dashboard">
					<TicketList data={ticketList} onClick={goTicketDetail}></TicketList>
				</div>
			</div>
		</div>
	);
};

export default MyTicketsPage;
