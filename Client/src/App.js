import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./main.css";

import UserPage from "./components/pages/UserPage";
import UserSearchPage from "./components/pages/UserSearchPage";
import DashboardPage from "./components/pages/DashboardPage";

function App() {
	return (
		<div>
			<Router>
				<Route component={DashboardPage} exact path="/" />
				<Route component={UserPage} exact path="/user" />
				<Route component={UserPage} exact path="/user/:email" />
				<Route component={UserSearchPage} exact path="/findUser" />
			</Router>
		</div>
	);
}

export default App;

{
	/* <nav class="navbar navbar-expand-md navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Features</a>
          </div>
        </div>
      </nav> */
}

{
	/* <DashboardPage></DashboardPage> */
}

{
	/* <div className="dashboard-main dashboard">
        <UserList></UserList>
      </div> */
}
