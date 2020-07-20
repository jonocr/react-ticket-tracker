import React, { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import TopBar from "../../layout/TopBar";
import SideMenu from "../../layout/SideMenu";
import TicketList from "../../tickets/TicketList";
import TicketSearchBar from "../../tickets/TicketSearchBar";
import AuthContext from "../../utils/AuthContext";

const TicketSearchPage = (props) => {
	const abortController = new AbortController();
	const signal = abortController.signal;
	const [closeCss, setCloseCss] = useState("");
	const [tickets, setTickets] = useState([]);
	const [ticket, setTicket] = useState();
	const { userData } = useContext(AuthContext);

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	useEffect(() => {
		getAllTickets(signal);

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

	const findTicketsQuery = (criteria, query) => {
		fetch(
			`${process.env.REACT_APP_API_SERVER_URL}/tickets/tickets-criteria/${criteria}/${query}`
		)
			.then((response) => {
				return response.json();
			})
			.then((responseData) => {
				setTickets(responseData);
			})
			.catch((err) => {
				console.log("error at fetching: ", err);
			});
	};

	const getAllTickets = async (signal) => {
		fetch(`${process.env.REACT_APP_API_SERVER_URL}/tickets/list-all`, {
			signal: signal,
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
				setTickets(responseData);
			})
			.catch((err) => {
				console.log("error at fetching: ", err);
			});
	};

	return (
		<div className={closeCss}>
			{ticket && redirectDetail()}
			<SideMenu css={closeCss}></SideMenu>
			<TopBar onClick={clickToggle} css={closeCss}></TopBar>
			<div className="container">
				<div className="dashboard-bar dashboard">Ticket Search</div>
				<div className="dashboard-main dashboard">
					<TicketSearchBar onClick={findTicketsQuery}></TicketSearchBar>
					<TicketList
						data={tickets}
						onClick={goTicketDetail}
						user={userData.user.email}
					></TicketList>
				</div>
			</div>
		</div>
	);
};

export default TicketSearchPage;
