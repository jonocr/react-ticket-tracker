import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../utils/AuthContext";

const SideMenu = (props) => {
	const { userData } = useContext(AuthContext);
	console.log(
		"%c SIDE MENU context: ",
		"background: #222; color: #bada55",
		userData
	);

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
									width="1em"
									height="1em"
									viewBox="0 0 16 16"
									className="bi bi-folder-plus"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M9.828 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91H9v1H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0 0 13.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293z"
									/>
									<path
										fillRule="evenodd"
										d="M13.5 10a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"
									/>
									<path
										fillRule="evenodd"
										d="M13 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"
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
						{userData.user.department !== "Client" && (
							<div>
								<li>
									<Link to="/ticket-search">
										<svg
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											className="bi bi-collection"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"
											/>
										</svg>
										All Tickets
									</Link>
								</li>
								<li>
									<Link to="/my-cases">
										<svg
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											className="bi bi-folder-symlink"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M9.828 4a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 6.173 2H2.5a1 1 0 0 0-1 .981L1.546 4h-1L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3v1z" />
											<path
												fillRule="evenodd"
												d="M13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zM2.19 3A2 2 0 0 0 .198 5.181l.637 7A2 2 0 0 0 2.826 14h10.348a2 2 0 0 0 1.991-1.819l.637-7A2 2 0 0 0 13.81 3H2.19z"
											/>
											<path d="M8.616 10.24l3.182-1.969a.443.443 0 0 0 0-.742l-3.182-1.97c-.27-.166-.616.036-.616.372V6.7c-.857 0-3.429 0-4 4.8 1.429-2.7 4-2.4 4-2.4v.769c0 .336.346.538.616.371z" />
										</svg>
										My Cases
									</Link>
								</li>
							</div>
						)}
					</ul>
					{userData.user.department !== "Client" && (
						<div>
							<div className="menu-subtitle">Users</div>
							<ul>
								<li>
									<Link to="/my-profile">
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
										Profile
									</Link>
								</li>
								<li>
									<Link to="/findUser">
										<svg
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											className="bi bi-people"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002.002zM7.022 13h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zm7.973.056v-.002.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
											/>
										</svg>
										List Users
									</Link>
								</li>
								<li>
									<Link to="/user">
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
									</Link>
								</li>
							</ul>
						</div>
					)}
				</div>
			</nav>

			<nav className="navbar navbar-dark bg-dark d-md-none">
				<a className="navbar-brand" href="/#">
					Ticket Tracker
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
							<Link className="nav-link" to="/dashboard">
								Dashboard <span className="sr-only">(current)</span>
							</Link>
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
								Tickets
							</a>
							<div
								className="dropdown-menu"
								aria-labelledby="navbarDropdownMenuLink"
							>
								<Link className="dropdown-item" to="/create-ticket">
									Create Ticket
								</Link>
								<Link className="dropdown-item" to="/my-tickets">
									My Tickets
								</Link>
								{userData.user.department !== "Client" && (
									<React.Fragment>
										<Link className="dropdown-item" to="/ticket-search">
											All Tickets
										</Link>
										<Link className="dropdown-item" to="/my-cases">
											My Cases
										</Link>
									</React.Fragment>
								)}
							</div>
						</li>
						{userData.user.department !== "Client" && (
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="/#"
									id="navbarDropdownMenuLink"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Users
								</a>
								<div
									className="dropdown-menu"
									aria-labelledby="navbarDropdownMenuLink"
								>
									<Link className="dropdown-item" to="/create-ticket">
										Create User
									</Link>
									<Link className="dropdown-item" to="/my-tickets">
										My Tickets
									</Link>
									<Link className="dropdown-item" to="/ticket-search">
										All Users
									</Link>
									<Link className="dropdown-item" to="/my-cases">
										My Cases
									</Link>
								</div>
							</li>
						)}
					</ul>
				</div>
			</nav>
		</section>
	);
};

export default SideMenu;
