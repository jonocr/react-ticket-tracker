import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../utils/AuthContext";

const SideMenu = (props) => {
	const { userData } = useContext(AuthContext);

	return (
		<section className={props.css}>
			<nav className="side-menu d-none d-md-block">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="container">
					<div className="menu-title">
						React <span className="menu-title-highligh">Tracker</span>
					</div>
					<ul>
						<li id="menu-dashboard">
							<Link to="/dashboard">
								<svg
									className="bi bi-display-fill"
									width="1em"
									height="1em"
									viewBox="0 0 16 16"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M5.75 13.5c.167-.333.25-.833.25-1.5h4c0 .667.083 1.167.25 1.5H11a.5.5 0 010 1H5a.5.5 0 010-1h.75z" />
									<path
										fillRule="evenodd"
										d="M13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 00-.254.302A1.46 1.46 0 001 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 00.538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 00.254-.302 1.464 1.464 0 00.143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 00-.302-.254A1.46 1.46 0 0013.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"
										clipRule="evenodd"
									/>
									<path d="M2 4h12v6H2z" />
								</svg>
								Dashboard
							</Link>
						</li>
					</ul>
					<div className="menu-subtitle">Tickets</div>
					<ul>
						<li>
							<Link to="/create-ticket">
								<svg
									className="bi bi-folder"
									width="1em"
									height="1em"
									viewBox="0 0 16 16"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M9.828 4a3 3 0 01-2.12-.879l-.83-.828A1 1 0 006.173 2H2.5a1 1 0 00-1 .981L1.546 4h-1L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3v1z" />
									<path
										fillRule="evenodd"
										d="M13.81 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91h10.348a1 1 0 00.995-.91l.637-7A1 1 0 0013.81 4zM2.19 3A2 2 0 00.198 5.181l.637 7A2 2 0 002.826 14h10.348a2 2 0 001.991-1.819l.637-7A2 2 0 0013.81 3H2.19z"
										clipRule="evenodd"
									/>
								</svg>
								Create Ticket
							</Link>
						</li>
						<li>
							<Link to="/my-tickets">
								<svg
									className="bi bi-folder"
									width="1em"
									height="1em"
									viewBox="0 0 16 16"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M9.828 4a3 3 0 01-2.12-.879l-.83-.828A1 1 0 006.173 2H2.5a1 1 0 00-1 .981L1.546 4h-1L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3v1z" />
									<path
										fillRule="evenodd"
										d="M13.81 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91h10.348a1 1 0 00.995-.91l.637-7A1 1 0 0013.81 4zM2.19 3A2 2 0 00.198 5.181l.637 7A2 2 0 002.826 14h10.348a2 2 0 001.991-1.819l.637-7A2 2 0 0013.81 3H2.19z"
										clipRule="evenodd"
									/>
								</svg>
								My Tickets
							</Link>
						</li>
						{userData.user.department != "Client" && (
							<div>
								<li>
									<Link to="/ticket-search">
										<svg
											className="bi bi-folder"
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M9.828 4a3 3 0 01-2.12-.879l-.83-.828A1 1 0 006.173 2H2.5a1 1 0 00-1 .981L1.546 4h-1L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3v1z" />
											<path
												fillRule="evenodd"
												d="M13.81 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91h10.348a1 1 0 00.995-.91l.637-7A1 1 0 0013.81 4zM2.19 3A2 2 0 00.198 5.181l.637 7A2 2 0 002.826 14h10.348a2 2 0 001.991-1.819l.637-7A2 2 0 0013.81 3H2.19z"
												clipRule="evenodd"
											/>
										</svg>
										All Tickets
									</Link>
								</li>
								<li>
									<Link to="/my-cases">
										<svg
											className="bi bi-folder"
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M9.828 4a3 3 0 01-2.12-.879l-.83-.828A1 1 0 006.173 2H2.5a1 1 0 00-1 .981L1.546 4h-1L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3v1z" />
											<path
												fillRule="evenodd"
												d="M13.81 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91h10.348a1 1 0 00.995-.91l.637-7A1 1 0 0013.81 4zM2.19 3A2 2 0 00.198 5.181l.637 7A2 2 0 002.826 14h10.348a2 2 0 001.991-1.819l.637-7A2 2 0 0013.81 3H2.19z"
												clipRule="evenodd"
											/>
										</svg>
										My Cases
									</Link>
								</li>
								<li>
									<a href="/#">
										<svg
											className="bi bi-folder"
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M9.828 4a3 3 0 01-2.12-.879l-.83-.828A1 1 0 006.173 2H2.5a1 1 0 00-1 .981L1.546 4h-1L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3v1z" />
											<path
												fillRule="evenodd"
												d="M13.81 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91h10.348a1 1 0 00.995-.91l.637-7A1 1 0 0013.81 4zM2.19 3A2 2 0 00.198 5.181l.637 7A2 2 0 002.826 14h10.348a2 2 0 001.991-1.819l.637-7A2 2 0 0013.81 3H2.19z"
												clipRule="evenodd"
											/>
										</svg>
										Due Date
									</a>
								</li>
							</div>
						)}
					</ul>
					{userData.user.department != "Client" && (
						<div>
							<div className="menu-subtitle">Users</div>
							<ul>
								<li>
									<Link to="/findUser">
										<svg
											className="bi bi-person"
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z"
												clipRule="evenodd"
											/>
										</svg>
										List Users
									</Link>
								</li>
								<li>
									<a href="/user">
										<svg
											className="bi bi-person-plus"
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M11 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM1.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM6 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zm4.5 0a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z"
												clipRule="evenodd"
											/>
											<path
												fillRule="evenodd"
												d="M13 7.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z"
												clipRule="evenodd"
											/>
										</svg>
										Create User
									</a>
								</li>
								<li>
									<a href="/#">
										<svg
											className="bi bi-folder"
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M9.828 4a3 3 0 01-2.12-.879l-.83-.828A1 1 0 006.173 2H2.5a1 1 0 00-1 .981L1.546 4h-1L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3v1z" />
											<path
												fillRule="evenodd"
												d="M13.81 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91h10.348a1 1 0 00.995-.91l.637-7A1 1 0 0013.81 4zM2.19 3A2 2 0 00.198 5.181l.637 7A2 2 0 002.826 14h10.348a2 2 0 001.991-1.819l.637-7A2 2 0 0013.81 3H2.19z"
												clipRule="evenodd"
											/>
										</svg>
										Roles
									</a>
								</li>
							</ul>
						</div>
					)}
				</div>
			</nav>

			<nav className="navbar navbar-dark bg-dark d-md-none">
				<a className="navbar-brand" href="/#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="/#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/#">
								Features
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/#">
								Pricing
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="/#"
								id="navbarDropdownMenuLink"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Dropdown link
							</a>
							<div
								className="dropdown-menu"
								aria-labelledby="navbarDropdownMenuLink"
							>
								<a className="dropdown-item" href="/#">
									Action
								</a>
								<a className="dropdown-item" href="/#">
									Another action
								</a>
								<a className="dropdown-item" href="/#">
									Something else here
								</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</section>
	);
};

export default SideMenu;
