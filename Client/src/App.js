import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./main.css";

import UserPage from "./components/pages/UserPage";
import UserSearchPage from "./components/pages/UserSearchPage";
import DashboardPage from "./components/pages/DashboardPage";
import LoginPage from "./components/pages/LoginPage";
import AuthContext from "./components/utils/AuthContext";

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

	return (
		<div>
			<AuthContext.Provider value={{ userData, setUserData }}>
				<Router>
					<Route component={DashboardPage} exact path="/" />
					<Route component={LoginPage} exact path="/login" />
					<Route component={UserPage} exact path="/user" />
					<Route component={UserPage} exact path="/user/:email" />
					<Route component={UserSearchPage} exact path="/findUser" />
				</Router>
			</AuthContext.Provider>
		</div>
	);
}

export default App;
