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
      {/* <nav class="navbar navbar-expand-md navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Features</a>
          </div>
        </div>
      </nav> */}
      <SideMenu css={closeCss}></SideMenu>
      <TopBar onClick={clickToggle} css={closeCss}></TopBar>
      
      <div className="container">
        <div className="dashboard-bar dashboard">
          Dashboar Title
        </div>
        <div className="dashboard-main dashboard">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-3">
              <div className="box">
                1 of 4
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div className="box">
                2 of 4
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div className="box">
                3 of 4
              </div>
            </div>
            <div class="ccol-12 col-md-6 col-lg-3">
              <div className="box">
                4 of 4
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 col-lg-3">
              <div className="box">
                1 of 4
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div className="box">
                2 of 4
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div className="box">
                3 of 4
              </div>
            </div>
            <div class="ccol-12 col-md-6 col-lg-3">
              <div className="box">
                4 of 4
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
