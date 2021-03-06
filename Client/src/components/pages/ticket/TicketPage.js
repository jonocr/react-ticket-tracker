import React, { useState, useContext, useEffect } from "react";
import TicketForm from "../../tickets/TicketForm";
import SideMenu from "../../layout/SideMenu";
import TopBar from "../../layout/TopBar";
import AuthContext from "../../utils/AuthContext";
import { useHistory } from "react-router";
import { createTicket, updateTicket } from "../../tickets/TicketApi";

const ALERT_MSG_CREATE_TICKET_CONFIRMATION = "Ticket created.";
const ALERT_MSG_UPDATE_TICKET_CONFIRMATION = "Ticket updated.";

const TicketPage = (props) => {
	const [closeCss, setCloseCss] = useState("");
	const [ticket, setTicket] = useState(null);
	const { userData } = useContext(AuthContext);
	const [msgCss, setMsgCss] = useState("close d-none");
	const history = useHistory();
	const [alertMsg, setAlertMsg] = useState("");

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	const showMsg = (msg, style) => {
		setMsgCss(`alert ${style} alert-dismissible fade show`);
		setAlertMsg(msg);
	};

	const hideMsg = () => {
		setMsgCss("close d-none");
	};

	const redirectMyTickets = () => {
		if (alertMsg === ALERT_MSG_CREATE_TICKET_CONFIRMATION) {
			history.push("/my-tickets");
		}
	};

	const clickCreateHandle = async (ticket) => {
		createTicket(ticket, userData.token)
			.then((data) => {
				showMsg(ALERT_MSG_CREATE_TICKET_CONFIRMATION, "alert-success");
			})
			.catch((err) => console.log(err));
	};

	const clickUpdateHandle = async (ticket) => {
		updateTicket(ticket, userData.token)
			.then((data) => {
				showMsg(ALERT_MSG_UPDATE_TICKET_CONFIRMATION, "alert-success");
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		!userData.token && history.push("/login");
		props.location.state !== undefined &&
			setTicket(props.location.state.ticket);
		// eslint-disable-next-line
	}, []);

	return (
		<div className={closeCss}>
			<SideMenu css={closeCss}></SideMenu>
			<TopBar onClick={clickToggle} css={closeCss}></TopBar>

			<div className="container">
				<div className="dashboard-bar dashboard">Ticket Managment</div>
				<div className="dashboard-main dashboard ticket-page">
					<TicketForm
						clickHandle={ticket ? clickUpdateHandle : clickCreateHandle}
						data={
							props.location.state !== undefined
								? props.location.state.ticket
								: {}
						}
						buttonText={ticket ? "Save Changes" : "Create Ticket"}
					></TicketForm>
					<div className={msgCss} role="alert">
						{alertMsg}
						<button type="button" className="close" onClick={redirectMyTickets}>
							<span onClick={hideMsg}>&times;</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TicketPage;
