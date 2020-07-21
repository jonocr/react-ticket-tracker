import React, { useState, useContext, useEffect } from "react";
import TicketForm from "../../tickets/TicketForm";
import SideMenu from "../../layout/SideMenu";
import TopBar from "../../layout/TopBar";
import AuthContext from "../../utils/AuthContext";
import { useHistory } from "react-router";

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
		fetch(`${process.env.REACT_APP_API_SERVER_URL}/tickets/create`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${userData.token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(ticket),
		})
			.then((res) => res.json())
			.then((data) => {
				showMsg(ALERT_MSG_CREATE_TICKET_CONFIRMATION, "alert-success");
			})
			.catch((err) => console.log(err));
	};

	const clickUpdateHandle = async (ticket) => {
		fetch(`${process.env.REACT_APP_API_SERVER_URL}/tickets/update`, {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${userData.token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(ticket),
		})
			.then((res) => res.json())
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
	);
};

export default TicketPage;
