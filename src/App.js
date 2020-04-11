import React, { useState } from 'react';
import './main.css';
import TopBar from "./components/layout/TopBar";
import SideMenu from "./components/layout/SideMenu";

function App() {
  const [closeCss, setCloseCss] = useState("");

  const clickToggle = (e) => {
      closeCss === "" ? setCloseCss("close-menu") : setCloseCss("");
      console.log("click!");
  }


  return (
    <div className={closeCss}>
      <SideMenu css={closeCss}></SideMenu>
      <TopBar onClick={clickToggle} css={closeCss}></TopBar>
      <div id="dashboad" className="container dashboad">
      <div className="dashboard-bar">
        Dashboar Title
      </div>
      <div className="dashboard-main">
        Dashboar Title
      </div>
      </div>
    </div>
  );
}

export default App;
