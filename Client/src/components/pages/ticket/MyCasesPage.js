import React, { useEffect, useState, useContext } from "react";
import TicketList from "../../tickets/TicketList";
import TopBar from "../../layout/TopBar";
import SideMenu from "../../layout/SideMenu";
import AuthContext from "../../utils/AuthContext";
import { useHistory } from "react-router-dom";
import { getAllTicketsDynamicQuery } from "../../tickets/TicketApi";

const MyCasesPage = (props) => {
	const { userData } = useContext(AuthContext);
	const [closeCss, setCloseCss] = useState("");
	const [ticketList, setTicketList] = useState([]);
	const history = useHistory();

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	useEffect(() => {
		!userData.token && history.push("/login");
		getAllTicketsDynamicQuery("assignedTo", userData.user.email).then(
			(response) => {
				console.log("get tickets assigned to me: ", response);
				setTicketList(response);
			}
		);
	}, []);

	const ticketDetails = (ticket) => {
		console.log("details: ", ticket);
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

export default MyCasesPage;