import React, { useState, useContext } from "react";
import SideMenu from "../../layout/SideMenu";
import TopBar from "../../layout/TopBar";

const TicketDetail = (props) => {
	const [closeCss, setCloseCss] = useState("");
	const [ticket, setTicketList] = useState([]);
	const { userData } = useContext(AuthContext);

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};
	return (
		<div className="ticket-detail">
			<div className={closeCss}>
				<SideMenu css={closeCss}></SideMenu>
				<TopBar onClick={clickToggle} css={closeCss}></TopBar>
				<div className="container">
					<div className="dashboard-bar dashboard">Ticket Search</div>
					<div className="dashboard-main dashboard"></div>
				</div>
			</div>
		</div>
	);
};

export default TicketDetail;
