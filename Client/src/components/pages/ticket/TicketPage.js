import React, { useState, useContext, useEffect } from "react";
import TicketForm from "../../tickets/TicketForm";
import SideMenu from "../../layout/SideMenu";
import TopBar from "../../layout/TopBar";
import AuthContext from "../../utils/AuthContext";
import { useHistory } from "react-router";

const TicketPage = (props) => {
	const [closeCss, setCloseCss] = useState("");
	const [ticket, setTicket] = useState(null);
	const { userData } = useContext(AuthContext);
	const [succesMsgCss, setSuccesMsgCss] = useState("close d-none");
	const history = useHistory();

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	const showMsg = () => {
		setSuccesMsgCss("alert alert-success alert-dismissible fade show");
	};

	const clickCreateHandle = async (ticket) => {
		fetch("http://localhost:8000/tickets/create", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${userData.token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(ticket),
		})
			.then((res) => res.json())
			.then((data) => {
				showMsg();
			})
			.catch((err) => console.log(err));
	};

	const clickUpdateHandle = async (ticket) => {
		fetch("http://localhost:8000/tickets/update", {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${userData.token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(ticket),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		!userData.token && history.push("/login");
		props.location.state !== undefined &&
			setTicket(props.location.state.ticket);
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
				<div className={succesMsgCss} role="alert">
					You have <strong>succesfully</strong> created a new ticket.
					<button
						type="button"
						className="close"
						data-dismiss="alert"
						aria-label="Close"
					>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default TicketPage;
