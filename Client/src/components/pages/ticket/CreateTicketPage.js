import React, { useState, useContext } from "react";
import NewTicketForm from "../../others/NewTicket";
import SideMenu from "../../layout/SideMenu";
import TopBar from "../../layout/TopBar";
import AuthContext from "../../utils/AuthContext";

const CreateTicketPage = () => {
	const [closeCss, setCloseCss] = useState("");
	const { userData } = useContext(AuthContext);

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	return (
		<div className={closeCss}>
			<SideMenu css={closeCss}></SideMenu>
			<TopBar onClick={clickToggle} css={closeCss}></TopBar>
			<div className="dashboard-main dashboard">
				<NewTicketForm></NewTicketForm>
			</div>
		</div>
	);
};

export default CreateTicketPage;
