import React, { useState, useContext, useEffect } from "react";
import NewTicketForm from "../../tickets/NewTicketForm";
import SideMenu from "../../layout/SideMenu";
import TopBar from "../../layout/TopBar";
import AuthContext from "../../utils/AuthContext";
import { useHistory } from "react-router";

const TicketPage = () => {
	const [closeCss, setCloseCss] = useState("");
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
		console.log("Create Ticket Page data: ", ticket);
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

	useEffect(() => {
		if (!userData.token) {
			history.push("/login");
		}
	}, []);

	return (
		<div className={closeCss}>
			<SideMenu css={closeCss}></SideMenu>
			<TopBar onClick={clickToggle} css={closeCss}></TopBar>
			<div className="dashboard-main dashboard">
				<NewTicketForm clickHandle={clickCreateHandle}></NewTicketForm>
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
