import React from "react";
import NewTicketForm from "../../others/NewTicket";
import SideMenu from "../../layout/SideMenu";
import TopBar from "../../layout/TopBar";

export default CreateTicketPage = () => {
	const [closeCss, setCloseCss] = useState("");
	const { userData } = useContext(AuthContext);

	const clickToggle = (e) => {
		closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
	};

	return (
		<div className={closeCss}>
			<SideMenu css={closeCss}></SideMenu>
			<TopBar onClick={clickToggle} css={closeCss}></TopBar>
			<div className="container">
				<NewTicketForm></NewTicketForm>
			</div>
		</div>
	);
};
