import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./main.css";

import UserPage from "./components/pages/user/UserPage";
import UserSearchPage from "./components/pages/user/UserSearchPage";
import DashboardPage from "./components/pages/DashboardPage";
import LoginPage from "./components/pages/LoginPage";
import CreateUser from "./components/pages/user/CreateUser";
import TicketPage from "./components/pages/ticket/TicketPage";
import MyTicketsPage from "./components/pages/ticket/MyTicketsPage";
import AuthContext from "./components/utils/AuthContext";
import TicketSearchPage from "./components/pages/ticket/TicketsSearchPage";
import MyCasesPage from "./components/pages/ticket/MyCasesPage";

const GUEST_USER = {
	email: null,
	userName: "Guest",
	isManager: false,
	department: null,
};

function App() {
	const [userData, setUserData] = useState({
		token: undefined,
		user: GUEST_USER,
		loading: true,
	});
	// const [userData, setUserData] = useState({
	// 	token: window.localStorage.getItem("token"),
	// 	user: window.localStorage.getItem("user"),
	// 	loading: true,
	// });

	return (
		<div>
			<AuthContext.Provider value={{ userData, setUserData }}>
				<Router>
					<Route component={LoginPage} exact path="/login" />
					<Route component={CreateUser} exact path="/new-account" />
					<Route component={LoginPage} exact path="/" />
					<Route component={DashboardPage} exact path="/dashboard" />
					<Route component={TicketPage} exact path="/ticket" />
					<Route component={TicketPage} exact path="/create-ticket" />
					<Route component={MyCasesPage} exact path="/my-cases" />

					{userData.token && <Route component={UserPage} exact path="/user" />}
					{userData.token && (
						<Route component={TicketSearchPage} exact path="/ticket-search" />
					)}
					{userData.token && (
						<Route component={MyTicketsPage} exact path="/my-tickets" />
					)}
					{userData.token && (
						<Route component={UserPage} exact path="/user/:email" />
					)}
					{userData.token && (
						<Route component={UserSearchPage} exact path="/findUser" />
					)}
				</Router>
			</AuthContext.Provider>
		</div>
	);
}

export default App;
