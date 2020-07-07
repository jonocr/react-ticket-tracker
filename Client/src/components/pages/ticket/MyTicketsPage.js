import React, { useEffect, useState, useContext } from "react";
import TicketList from "../../tickets/TicketList";
import TopBar from "../../layout/TopBar";
import SideMenu from "../../layout/SideMenu";
import AuthContext from "../../utils/AuthContext";

const MyTicketsPage = (props) => {
	const [closeCss, setCloseCss] = useState("");
	const [ticketList, setTicketList] = useState([]);
	const { userData } = useContext(AuthContext);

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	const ticketDetails = (ticket) => {
		console.log("details: ", ticket);
	};

	useEffect(() => {
		findTicketsbyEmail(userData.user.email);
	}, []);

	const findTicketsbyEmail = (email) => {
		fetch(`http://localhost:8000/tickets/user-list/${email}`)
			.then((response) => {
				return response.json();
			})
			.then((responseData) => {
				console.log("findTicketsbyEmail: ", responseData);
				setTicketList(responseData);
			})
			.catch((err) => {
				console.log("error at fetching: ", err);
			});
	};

	return (
		<div className={closeCss}>
			<SideMenu css={closeCss}></SideMenu>
			<TopBar onClick={clickToggle} css={closeCss}></TopBar>
			<div className="container">
				<div className="dashboard-bar dashboard">My Tickets</div>
				<div className="dashboard-main dashboard">
					<TicketList data={ticketList} onClick={ticketDetails}></TicketList>
				</div>
			</div>
		</div>
	);
};

export default MyTicketsPage;
