import React, { useEffect, useState, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import TopBar from "../../layout/TopBar";
import SideMenu from "../../layout/SideMenu";
import TicketList from "../../tickets/TicketList";
import TicketSearchBar from "../../tickets/TicketSearchBar";
import AuthContext from "../../utils/AuthContext";

const TicketSearchPage = (props) => {
	const [closeCss, setCloseCss] = useState("");
	const [tickets, setTickets] = useState([]);
	const [ticket, setTicket] = useState();
	const { userData } = useContext(AuthContext);
	const history = useHistory();

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	useEffect(() => {
		getAllTickets();
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
		fetch(`http://localhost:8000/tickets/tickets-criteria/${criteria}/${query}`)
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

	const getAllTickets = async () => {
		fetch(`http://localhost:8000/tickets/list-all`, {
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
					<TicketList data={tickets} onClick={goTicketDetail}></TicketList>
				</div>
			</div>
		</div>
	);
};

export default TicketSearchPage;
